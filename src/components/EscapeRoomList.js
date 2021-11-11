import '../App.css';
import React from "react";
import {useHistory} from "react-router-dom";
import {Button} from "@mui/material";



const EscapeRoomList=()=>{
    const history= useHistory();
    return(
        <div className="App">

            <ul className="App">
                <Button variant="contained" onClick={()=>{history.push('/escaperoom')}}>
                    <p>Hietaranta Escape room</p>
                </Button>
                <Button variant="contained" onClick={()=>{history.push('/escaperoom')}}>
                    <p>Uunisaari Escape room</p>
                </Button>
            </ul>

        </div>
    );

}

export default EscapeRoomList;
