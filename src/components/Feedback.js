import '../App.css';
import React from "react";
import {useState, useEffect} from "react";
import {
    Button,
    Card,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Rating,
    Select,
    TextField
} from "@mui/material";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
import {db, auth} from "../Utils/firebase";
import {useAuthState} from 'react-firebase-hooks/auth';



const Feedback = (id) =>{
    const [feedback, setFeedback] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [review, setReview] = useState(1);
    const [dbData, setDbData] = useState([]);

    const sendData =async () => {
        try {
            const docRef = await addDoc(collection(db, "reviews"), {
                id: id.id,
                review: review,
                feedback: feedback,
                uName : auth.currentUser.displayName

            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }



   useEffect(async () => {
       const reviewsRef = collection(db, "reviews");

// Create a query against the collection.
       const q = query(reviewsRef, where("id", "==", id.id));
      const data = [];
       const querySnapshot = await getDocs(q);
       querySnapshot.forEach((doc) => {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data().review);
           data.push({review: doc.data().review, feedback: doc.data().feedback, uName: doc.data().uName})
       }
       );
       setDbData(data);

   },[])

    return (
       <div>
           <TextField sx={{
               margin: "auto",
               width: "75%",
              height: "40%"
           }} id="outlined-basic" label="Feedback" variant="outlined" multiline
                      maxRows={3}
                      onChange={(e => setFeedback(e.target.value))}/>

           <Rating
               name="simple-controlled"
               value={review}
               onChange={(event, newValue) => {
                   setReview(newValue);
               }}
           />
           {user ? <Button variant="contained" onClick={sendData}>Submit review</Button>: <Button disabled variant="contained" onClick={sendData}>Log in to post review</Button>  }


           <Paper style={{ padding: "10px 20px" , overflow: "auto", maxHeight: "300px" , marginTop: "10px"}}>
               {dbData.map((data, index) => {
                   return (
                            <div key={index}>
                           <Grid  container wrap="nowrap" spacing={2}>

                               <Grid justifyContent="left" item xs zeroMinWidth>
                                   <h4 style={{ margin: 0, textAlign: "left" }}>{data?.uName}</h4>
                                   <p style={{ textAlign: "left", overflowY:"auto" }}>
                                       {data?.feedback}
                                   </p>

                                   <Rating sx={{ float: "left"}} name="read-only" value={data?.review} readOnly />
                               </Grid>

                           </Grid>
                                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                            </div>



                   );
               })}


           </Paper>

       </div>
    )

}
export default Feedback;
