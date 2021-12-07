import '../App.css';
import React from "react";
import {useState} from "react";
import EscapeRoomMenu from "./EscapeRoomMenu";
import {QuizContext} from '../Utils/Contexts';
import EscapeRoomQuiz from "./EscapeRoomQuiz";
import EscapeRoomEndScreen from "./EscapeRoomEndScreen";

const EscapeRoom = () => {
    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);


    return (
        <div style={{marginTop: "20px"}} className="EscapeRoom">

            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
                {gameState === "menu" && <EscapeRoomMenu/>}
                {gameState === "quiz" && <EscapeRoomQuiz/>}
                {gameState === "end" && <EscapeRoomEndScreen/>}
            </QuizContext.Provider>
        </div>
    );

}

export default EscapeRoom;
