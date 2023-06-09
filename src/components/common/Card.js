import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid  from './Grid';

export default function OutlinedCard({

    questionCounter,
    questionArray,
    nextQuestion,
    setResult,
    result

}) {
  const removeUnicode = (str) => {
    let original_string  = str;
    let clean_string = original_string.replace(/&[a-zA-Z]+;/g, '').replace(/&#039;/g, "'");
    return clean_string;
  }

  return (
    <Box sx={{ minWidth: 275 }} style={{margin: 20}}>
      {questionArray.length > 0 ? (
        <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
         Question : {removeUnicode(questionArray[questionCounter - 1].question)}
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Category : {questionArray[questionCounter - 1].category}
        </Typography>

        {[
          ...questionArray[questionCounter - 1].incorrect_answers,
           questionArray[questionCounter - 1].correct_answer
        ].map((options) => {
          return (

          
            <Grid 
            nextQuestion={nextQuestion}
            options={options}
            setResult={setResult}
            result={result}
            correctAnswer ={questionArray[questionCounter - 1].correct_answer}
            />
            
          )
        })}
      </CardContent>
      
        </Card>

      ) : (
        ""

      )}
      
    </Box>
  );
}
