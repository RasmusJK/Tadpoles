import '../App.css';
import React, {useContext, useEffect, useState} from "react";
import {QuizContext} from "../Utils/Contexts";
import {Questions, Hints} from '../Utils/QuestionBank';
import {Button, TextField} from "@mui/material";
import {useHistory} from "react-router-dom";

const EscapeRoomEndScreen = () => {
    const {score, setGameState, setScore} = useContext(QuizContext);
    const [hints, setHints] = useState([]);
    const [answer, setAnswer] = useState("");
    const [status, setStatus] = useState(true);
    const history = useHistory();
    const getHints = (score) => {
        switch (score) {
            case 2:
            case 3:
                setHints((hints) => [...hints, ...Hints[0]]);
                console.log("hint1", Hints[0]);
                break;
            case 4:
            case 5:
                setHints((hints) => [...hints, ...Hints[1]]);
                console.log('hint2', Hints[2]);
                break;
            case 6:
            case 7:
                setHints((hints) => [...hints, ...Hints[3]]);
                console.log('hint 3', Hints[3]);
                break;
            case 8:
                setHints((hints) => [...hints, ...Hints[4]]);
                console.log("all hints", Hints[4]);
                break;
            default:
                console.log('you suck', Hints);
        }
    }

    useEffect(() => {
        getHints(score)
    }, []);

    const compare = () => {
        if (answer === "oxygen" || answer === "Oxygen") {
            setStatus(false);
            setScore(score + 1);
            alert("congrats")
        } else {
            setStatus(false)
            console.log(answer)
            alert("scrub")
        }
    }
    return (
        <div className="Quiz">

            <h1 style={{alignSelf: "center" , paddingLeft: "20%"}}>EscapeRoom Completed</h1>
            <h3> {score}/{Questions.length + 1}</h3>
            <div>
                <div>
                    {status ? <TextField sx={{
                            width: "300px",
                            height: "50px",
                            margin: "5px",
                        }} id="outlined-basic" label="Final question" variant="outlined"
                                         onChange={(e => setAnswer(e.target.value))}/> :
                        <p>Already answered</p>}
                    {status ? <Button variant="contained" onClick={compare}>Answer</Button> :
                        <Button variant="contained" onClick={() => {
                            history.push('/escaperooms')
                        }}>Return to escaperooms list</Button>}
                </div>
                <h2 style={{margin: "auto", width: "50%", textAlign: "center"}}>Hints:</h2>
                {hints.map(h => (
                    <h3 style={{margin: "auto", width: "75%", textAlign: "center"}} key={h}>{h}</h3>
                ))}
            </div>


        </div>
    );

}

export default EscapeRoomEndScreen;
