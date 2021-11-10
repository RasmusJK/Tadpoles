import '../App.css';
import React, {useContext} from "react";
import {QuizContext} from "../Utils/Contexts";
import {Questions} from '../Utils/QuestionBank';

const EscapeRoomEndScreen=()=>{
    const {score,  setGameState} = useContext(QuizContext);
    return(
        <div>

            <h1>end</h1>
            <h3> {score}/{Questions.length}</h3>
        </div>
    );

}

export default EscapeRoomEndScreen;
