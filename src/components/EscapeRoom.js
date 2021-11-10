import '../App.css';
import React from "react";
import {useState} from "react";
import EscapeRoomMenu from "./EscapeRoomMenu";
import {QuizContext} from '../Utils/Contexts';
import EscapeRoomQuiz from "./EscapeRoomQuiz";
import EscapeRoomEndScreen from "./EscapeRoomEndScreen";
const EscapeRoom=()=>{
    const [gameState,setGameState] = useState("menu");
    const [score,setScore] = useState(0);


    return(
        <div className="EscapeRoom">
            <p>Escape Room</p>
            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
            {gameState==="menu" && <EscapeRoomMenu/>}
            {gameState==="quiz" && <EscapeRoomQuiz/>}
            {gameState==="end" && <EscapeRoomEndScreen/>}
            </QuizContext.Provider>
        </div>
    );

}

export default EscapeRoom;
