import '../App.css';
import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";



const Beach=({match})=>{
    console.log("match params",match.params.id);
    const Id = parseInt(match.params.id);
    const [beach,setBeach]= useState([]);
console.log("ID",Id);
    const [loading, setLoading] =useState(false);
    const [error,setError] = useState(false);
        useEffect( () => {
            console.log("use effect ran");
            const GetBeach = async ()=>{
                setError(false);
                setLoading(true);

                try {
                    const response = await fetch(`https://open-api.myhelsinki.fi/v1/place/${Id}`);
                    const data = await response.json();
                    setBeach(data);
                } catch (error) {
                    setError(true);
                }
                setLoading(false);
                console.log("hmhm",beach)
            };
             GetBeach().then();
            console.log("beach", beach);

        },[]);


    return(
        <div>

            {error && <div>Something went wrong ...</div>}

            {loading ?(
                <div>Loading...</div>
            ) :(
                <div>
                <p>{beach.id} </p>
                <Button onClick={()=>{
                    console.log(beach.name.en);
                }}>hmhmmhmh</Button>
                </div>
            ) }


        </div>
    );

}


export default Beach;
