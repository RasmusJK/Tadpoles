import '../App.css';
import React, {useContext} from "react";
import {QuizContext} from "../Utils/Contexts";
import {Questions} from '../Utils/QuestionBank';
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";

const EscapeRoomEndScreen=()=>{
    const {score,  setGameState} = useContext(QuizContext);
    const history = useHistory();
    return(
        <div>

            <h1>end</h1>
            <h3> {score}/{Questions.length}</h3>
            <Button variant="contained" onClick={()=> {history.push('/escaperooms')}}>Return to escaperooms list</Button>
        </div>
    );

}

export default EscapeRoomEndScreen;
