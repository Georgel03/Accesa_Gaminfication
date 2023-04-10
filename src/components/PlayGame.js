import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
export default function PlayGame() {
    const { state } = useLocation();
    const [ questionCounter, setQuesCounter ] = useState(0)
    React.useEffect(() => {
        const { gameData } = state;
    }, [])

    const prevQuestion = () => {
         setQuesCounter(questionCounter - 1)
    }

    const nextQuestion = () => {
        setQuesCounter(questionCounter + 1)
    }
  return (
    <div>
       <h1>Play Game</h1>

       <div>
       <Button 
 
        onClick={prevQuestion}
        variant="contained" 
        style={{marginRight: 10 }}>
         Previous Question
        </Button>

        <Button 

        onClick={nextQuestion}
        variant="contained" 
        style={{marginLeft: 10 }}>
         Next Question
        </Button>
       </div> 

       <h2>{questionCounter}</h2>
    </div>
  )
}
