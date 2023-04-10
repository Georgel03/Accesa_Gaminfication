import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from './common/Card';
export default function PlayGame() {
    const { state } = useLocation();
    const [ questionCounter, setQuesCounter ] = useState(1);
    const [totalQuiz, setTotalQuiz] = useState(1);
    const [questionArray, setQuesArray] = useState([]);
    const [gameType, setGameType] = useState('');
    const [gameDifficulty, setGameDifficulty] = useState('');
    React.useEffect(() => {
        const { gameData, gameCount, gameType, gameDifficulty } = state;
        setQuesArray(gameData)
        setTotalQuiz(gameCount)
        setGameDifficulty(gameDifficulty)
        setGameType(gameType)
    }, [])

    const prevQuestion = () => {
        if(questionCounter > 1) {
         setQuesCounter(questionCounter - 1)
        }
    }

    const nextQuestion = () => {
        if(questionCounter < totalQuiz) {
            setQuesCounter(questionCounter + 1)
    }
    }
        
    
  return (
    <div>
       <h1>Play Game</h1>

       <div>
       <Button 
 
        onClick={prevQuestion}
        variant="contained" 
        disabled={questionCounter === 1 ? true : false}
        style={{marginRight: 10 }}>
         Previous Question
        </Button>

        <Button 

        onClick={nextQuestion}
        variant="contained" 
        disabled={questionCounter === Number(totalQuiz) ? true : false}
        style={{marginLeft: 10 }}>
         Next Question
        </Button>
       </div> 

       <h2>Question Number : {questionCounter}</h2>
       <h3>Difficulty Level: {gameDifficulty}</h3>
       <Card 
       questionArray={questionArray} 
       questionCounter={questionCounter}
       />
    </div>
  )
}
