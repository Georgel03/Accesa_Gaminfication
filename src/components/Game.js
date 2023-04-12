import React from 'react';
import Select from './common/Select';
import Input from './common/Input';
import GameDifficulty from  './common/DifficultySelect';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Game() {
  const navigate = useNavigate()
  const [gameCount, setGameCount] = React.useState('');
  const [gameType, setGameType] = React.useState('');
  const [gameDifficulty, setGameDifficulty] = React.useState('');
  const [playerName, setPlayerName] = React.useState('');
  

  const handleChange = (event) => {
    setGameType(event.target.value);
  };
  const handleDifficulty = (event) => {
    setGameDifficulty(event.target.value);
  };

  const getPlayerName = (value) => {
   
        setPlayerName(value)
        localStorage.setItem('Playername', value)
   
  }

  const getQuiz = () => {
    if(playerName) {
        axios.get(
            `https://opentdb.com/api.php?amount=${gameCount}&difficulty=${gameDifficulty}&category=${gameType}`)
          
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
    else {
        toast.error(`Please Enter Player's Name!`)
    }
      
  }
  return (
    <div className='app-main'>
        <ToastContainer />
        <h1>Gamification</h1>
        <TextField 
            style={{marginBottom : 20}}
            fullWidth 
            id="outlined-basic" 
            label="Player Name" 
            variant="outlined" 
            onChange={(e) => getPlayerName(e.target.value)}
            value={playerName}
      />
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
        style={{marginTop: 10, marginRight: 5}}>
            Get Quiz
        </Button>

        <Button 

        onClick={() => navigate('/result')}
        variant="contained" 
        style={{marginTop: 10, marginLeft: 5}}>
            VIEW LEADER BOARD
        </Button>
        
    </div>
  )
}
