import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import  { useNavigate } from 'react-router-dom'


export default function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [finalResult, setFinalResult] = React.useState(0)
  React.useEffect(() => {
     const { finalResults } = state;
     setFinalResult(finalResults)

  }, [])
  const retryGame= () => {
        navigate('/')
  }
  return (
    <div>
       <h1>Results</h1>

       <h2>Final score is : {finalResult} </h2> 

       <Button 

        onClick={retryGame}
        variant="contained" 
        style={{marginLeft: 10 }}>
        Play Again! 

       </Button>
    </div>
  )
}
