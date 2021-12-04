import '../App.css';
import React from "react";
import {useState, useEffect} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
import {db, auth} from "../Utils/firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import Box from "@mui/material/Box";


const Feedback = (id) =>{
    const [feedback, setFeedback] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [review, setReview] = useState(1);

    const sendData =async () => {
        try {
            const docRef = await addDoc(collection(db, "reviews"), {
                id: id.id,
                review: review,
                feedback: feedback,


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
       const querySnapshot = await getDocs(q);
       querySnapshot.forEach((doc) => {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
       });
   },[])

    return (
       <div>
           <TextField id="outlined-basic" label="Feedback" variant="outlined"
                      onChange={(e => setFeedback(e.target.value))}/>

           <Box sx={{ minWidth: 120 }}>
               <FormControl fullWidth>
                   <InputLabel id="demo-simple-select-label">Age</InputLabel>
                   <Select
                       labelId="demo-simple-select-label"
                       id="demo-simple-select"
                       value={review}
                       label="Review"
                       onChange={(e => setReview(e.target.value))}
                   >
                       <MenuItem value={1}>1</MenuItem>
                       <MenuItem value={2}>2</MenuItem>
                       <MenuItem value={3}>3</MenuItem>
                       <MenuItem value={4}>4</MenuItem>
                       <MenuItem value={5}>5</MenuItem>
                   </Select>
               </FormControl>
           </Box>

           <Button variant="contained" onClick={sendData}>Submit review</Button>
           <ul>

           </ul>

       </div>
    )

}
export default Feedback;
