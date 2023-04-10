import React from 'react';
import Select from './common/Select';
import Input from './common/Input';
import GameDifficulty from  './common/DifficultySelect';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export default function Game() {
  const navigate = useNavigate()
  const [gameCount, setGameCount] = React.useState('');
  const [gameType, setGameType] = React.useState('');
  const [gameDifficulty, setGameDifficulty] = React.useState('');
  

  const handleChange = (event) => {
    setGameType(event.target.value);
  };
  const handleDifficulty = (event) => {
    setGameDifficulty(event.target.value);
  };

  const getQuiz = () => {
      axios.get(
        `https://opentdb.com/api.php?&amount=${gameCount}&difficulty=${gameDifficulty}&category=${gameType}&encode=base64`)
      
        .then((response) => {
            
            navigate('/play', 
            {
                state: { 
                    gameData : response.data.results,
                    gameCount : gameCount,
                    gameType : gameType,
                    gameDifficulty : gameDifficulty

                }
            })
        })
  }
  return (
    <div className='app-main'>
        <h1>Gamification</h1>
        <Input 
        setGameCount={setGameCount}
         gameCount={gameCount}/>
        <Select 
        gameType={gameType} 
        handleChange={handleChange}/>
        < GameDifficulty
           
           gameDifficulty={gameDifficulty}
           handleChange={handleDifficulty}

        />
        <Button 

        onClick={getQuiz}
        variant="contained" 
        style={{marginTop: 10}}>
            Get Quiz
        </Button>
        
    </div>
  )
}
