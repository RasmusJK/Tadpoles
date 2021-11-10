import '../App.css';
import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import axios from "axios";
import TopBar from "./TopBar";
/*
const GetBeach = async () => {
    setLoading(true);

    try {
        const response = await fetch(`https://open-api.myhelsinki.fi/v1/place/${Id}`);
        const data = await response.json();
        setBeach(data);

        const result = await axios(`https://open-api.myhelsinki.fi/v1/place/${Id}`);
        setBeach(result.data);

    } catch (error) {
        setError(true);
    }
    setLoading(false);
    console.log("hmhm",beach)
};
*/

const Beach = ({match}) => {

    console.log("match params", match.params.id);
    const Id = parseInt(match.params.id);
    const [beachId,setBeachId]= useState("");
    const [beachNameEn, setBeachNameEn] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] =useState("");
    console.log("ID", Id);
    const [loading, setLoading] =useState(false);
    const [error,setError] = useState(false);



    useEffect( () => {
        async function getBeach() {
            try {
                setLoading(true)
                const response = await fetch(`https://open-api.myhelsinki.fi/v1/place/${Id}`);
                const data = await response.json();
                setBeachId(data.id);
                setBeachNameEn(data.name.en);
                setAddress(data.location.address.street_address);
                setDescription(data.description.body);

            } catch (error) {
                console.log(error);
                setError(true);
            }
            setLoading(false);
        }
        console.log("use effect ran");
         getBeach().then();
         // eslint-disable-next-line
    },[]);




    //{error && <div>Something went wrong ...</div>}
    /*
    {loading ?(
        <div>Loading...</div>
    ) :(
        <div>
            <p>{beach.id} </p>
            <Button onClick={()=>{
                console.log(JSON.stringify(beach));
            }}>hmhmmhmh</Button>

        </div>
    ) }
    */


    return (
        <div>
            <TopBar/>
            <div className="App">
            {error && <div>Something went wrong ...</div>}
            {loading ?(
                <div>Loading...</div>
            ) :(
                <div>

                    <p>{beachNameEn}</p>
                    <p>{address}</p>
                    <p>{description}</p>
                </div>
            ) }
            </div>
        </div>
    );

}


export default Beach;
