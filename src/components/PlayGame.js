import React, { useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from './common/Card';
import { database } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';

export default function PlayGame() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [ questionCounter, setQuesCounter ] = useState(1);
    const [totalQuiz, setTotalQuiz] = useState(1);
    const [questionArray, setQuesArray] = useState([]);
    const [gameType, setGameType] = useState('');
    const [gameDifficulty, setGameDifficulty] = useState('');
    const [result, setResult] = useState(0);
    const [playerName, setPlayerName] = useState('');
    const databaseRef = collection(database, 'Leader Board')
    React.useEffect(() => {
        const { gameData, gameCount, gameType, gameDifficulty } = state;
        setQuesArray(gameData)
        setTotalQuiz(gameCount)
        setGameDifficulty(gameDifficulty)
        setGameType(gameType)
        setPlayerName(localStorage.getItem('Playername'))
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

    const submitQuiz = () => {
        addDoc(databaseRef, {

            playerName : playerName,
            difficulty : gameDifficulty,
            category : questionArray[0].category,
            finalScore: result
        })
        .then(() => {
            navigate('/result', {
                state: { 
                    finalResults : result ,
                    
                }
            })
        }) 
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
       nextQuestion={nextQuestion}
       setResult={setResult}
       result={result}
       />

      {questionCounter === Number(totalQuiz) ? (
        <Button 

        onClick={submitQuiz}
        variant="contained" 
        style={{marginLeft: 10 }}>
        Submit 
        </Button>

      ) : (
        ""

      )}
      
   
    </div>
  )
}
