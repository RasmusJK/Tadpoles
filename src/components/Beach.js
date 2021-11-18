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
    const [water, setWater] = useState("Dataa ei ole saatavilla");
    const [temp, setTemp] = useState("Dataa ei ole saatavilla");
    let sensor = "E703";

    const [loading, setLoading] =useState(false);
    const [error,setError] = useState(false);

const fetchData = () =>{
try {
    if (Id === 1920 ){
        sensor ="1A97";
    } else if (Id === 978){
        sensor= "1AB9";
    } else if (Id === 2962) {
        sensor="1ADA";
    }else if (Id === 3738) {
        sensor="1BA6";
    } else if (Id === 4037) {
        sensor="1BBE";
    }else if (Id === 1208) {
        sensor="4d86";
    }else if (Id === 2939) {
        sensor="4E0E";
    }else if (Id === 143) {
        sensor="4FB9";
    }
    const beachData =axios.get(`https://open-api.myhelsinki.fi/v1/place/${Id}`);
    console.log("BeachDATA",beachData)
    const weatherData = axios.get(`https://iot.fvh.fi/opendata/uiras/70B3D5705000${sensor}_v1.json`);
    axios.all([beachData,weatherData]).then(
        axios.spread((...allData)=>{
            const allDataBeach = allData[0]
            const allWeather = allData[1]
            console.log("axios1",allDataBeach.data)
            console.log("axios2",allWeather.data.data[allWeather.data.data.length-1])
            if (sensor !== "E703"){
                setWater(allWeather.data.data[allWeather.data.data.length-1].temp_water)
                setTemp(allWeather.data.data[allWeather.data.data.length-1].temp_air)
            }

            setBeachId(allDataBeach.data.id);
            setBeachNameEn(allDataBeach.data.name.fi);
            setAddress(allDataBeach.data.location.address.street_address);
            setDescription(allDataBeach.data.description.body);

        })
    )

}catch (e) {
    console.log("error", e);
}

}

    useEffect( () => {
        async function getBeach() {
            try {
                setLoading(true)
                fetchData();
                /*
                const response = await fetch(`https://open-api.myhelsinki.fi/v1/place/${Id}`);
                const beachResponse = await fetch(`https://iot.fvh.fi/opendata/uiras/70B3D57050004FB9_v1.json`);
                const data = await response.json();
                console.log("weatherdata",data)
                setBeachId(data.id);
                setBeachNameEn(data.name.fi);
                setAddress(data.location.address.street_address);
                setDescription(data.description.body);
*/



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
                    <image>placeholder image here</image>
                    <p>{beachNameEn}</p>
                    <p>{address}</p>
                    <p>{description}</p>
                    <p>Water temp: {water}°C</p>
                    <p>Air temp: {temp}°C</p>
                </div>
            ) }
            </div>
        </div>
    );

}


export default Beach;
