import '../App.css';
import React,{useEffect,useState} from "react";
import {MapContainer, Marker, TileLayer} from "react-leaflet";


const Beach=()=>{

    const [beach,setBeach]= useState([]);
    useEffect(()=> {
        getBeaches().then();
        console.log("rarara",beach);
    },[]);

    const getBeaches = async ()=>{
        const response = await fetch('https://open-api.myhelsinki.fi/v1/places/?tags_search=Beach');
        const data = await response.json();
        setBeach(data.data);

    };


    return (

        <div className="App">
            <MapContainer center={[60.169857,24.938379]} zoom={12}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {beach.map(b =>(
                    <Marker
                        key={b.id}
                        position={[b.location.lat,b.location.lon]}

                    />
                ))}
            </MapContainer>
        </div>
    );


}

export default Beach;
