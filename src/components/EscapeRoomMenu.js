import '../App.css';
import React, {useContext} from "react";
import {Button} from "@mui/material";
import {QuizContext} from "../Utils/Contexts";

const EscapeRoomMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext);
    return (
        <div className="App">
            <p>Hietaranta Escape room</p>
            <Button onClick={() => {
                setGameState("quiz")
            }}>Start</Button>
        </div>
    );

}

export default EscapeRoomMenu;
