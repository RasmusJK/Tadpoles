import '../App.css';
import React, {useEffect, useState} from "react";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {useHistory} from "react-router-dom";


const Map = () => {
    const history = useHistory();
    const [beach, setBeach] = useState([]);
    useEffect(() => {
        getBeaches().then();
        // eslint-disable-next-line array-callback-return
       /* beach.map(b=>{
            console.log(b.name.fi, b.id)

        })*/
        // eslint-disable-next-line
    }, []);

    const getBeaches = async () => {
      //  const response = await fetch('https://open-api.myhelsinki.fi/v2/places/?tags_search=Beach');
        const response = await fetch('https://node-proxy-server-v2.herokuapp.com/');


        const data = await response.json();
        setBeach(data.data);

    };


    return (

        <div className="App">
            <MapContainer center={[60.169857, 24.938379]} zoom={12}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {beach.map(b => (
                    <Marker
                        key={b.id}
                        position={[b.location.lat, b.location.lon]}
                        /* onClick={()=>{
                             //history.push(`/beach/${b.id}`)
                             console.log("clicked")

                         }} */
                        eventHandlers={{
                            click: (e) => {
                                console.log('marker clicked', e);
                                history.push(`/beach/${b.id}`);
                            },
                        }}
                    />
                ))}
            </MapContainer>
        </div>
    );


}

export default Map;
