import '../App.css';
import React,{useEffect,useState} from "react";
import {useHistory} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";



const EscapeRoomList=()=>{
    const history= useHistory()
    const [beaches, setBeaches] = useState([]);
 /*   const addButton = (beach) =>{
        return(   <Button variant="contained" onClick={()=>{history.push('/escaperoom')}}>
            <p>{beach}</p>
        </Button>);
    } */
    const fetchData=() =>{
        axios.get('https://node-proxy-server-v2.herokuapp.com/').then((res )=>{
           console.log(res.data);
            // eslint-disable-next-line array-callback-return
            res.data.data.map(b =>{
                //console.log(b.name.fi)
                setBeaches(beaches =>[...beaches,b.name.fi ])
            })
            //setBeaches(res.data.data);
            console.log(beaches)
        });
    }
    useEffect(() => {
       fetchData();
        // eslint-disable-next-line array-callback-return
        /* beach.map(b=>{
             console.log(b.name.fi, b.id)

         })*/
        // eslint-disable-next-line
    }, []);
    return(
        <div className="App">

            <ul className="App">
                {beaches.map(beach => (
                        beach === "Hietarannan uimaranta" ? (
                            <Button key={beach} variant="contained" onClick={()=>{history.push('/escaperoom')}}>
                                {beach}
                            </Button>
                        ) : (  <Button disabled key={beach+1} onClick={()=>{history.push('/escaperoom')}}>
                           {beach}
                        </Button>)
                    )
                )}

            </ul>

        </div>
    );

}

export default EscapeRoomList;
