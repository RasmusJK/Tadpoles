import '../App.css';
import React, {useState,useContext} from "react";
import {Questions} from '../Utils/QuestionBank';
import {Button} from "@mui/material";
import {QuizContext} from '../Utils/Contexts';

const EscapeRoomQuiz=()=>{
  const {score, setScore, setGameState} = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] =useState(0);
    const [optionChosen,setOptionChosen] = useState("");
    const next = () =>{
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score+1);
        }
       // alert(score);
        setCurrQuestion(currQuestion+1)
    };
    const finish = () => {
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score+1);
        }
        setGameState("end");
    }
    return(
        <div className="Quiz">
            <h1>{Questions[currQuestion].story}</h1>
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="Options">
                <Button variant="contained" onClick={()=>{setOptionChosen("A")}}>{Questions[currQuestion].optionA} </Button>
                <Button variant="contained" onClick={()=>{setOptionChosen("B")}}>{Questions[currQuestion].optionB} </Button>
                <Button variant="contained" onClick={()=>{setOptionChosen("C")}}>{Questions[currQuestion].optionC} </Button>
                <Button variant="contained" onClick={()=>{setOptionChosen("D")}}>{Questions[currQuestion].optionD} </Button>

                {currQuestion === Questions.length -1 ? (
                    <Button onClick={finish}>finish</Button>
                ):( <Button onClick={next}>Next Question</Button>)}


            </div>


        </div>
    );

}

export default EscapeRoomQuiz;
