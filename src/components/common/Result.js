import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
export default function Result() {
  const { state } = useLocation();
  const [finalResult, setFinalResult] = React.useState(0)
  React.useEffect(() => {
     const { finalResults } = state;
     setFinalResult(finalResults)

  }, [])
  return (
    <div>
       <h1>Results</h1>

       <h2>Final score is : {finalResult} </h2> 
    </div>
  )
}
