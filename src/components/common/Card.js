import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function OutlinedCard({

    questionCounter,
    questionArray

}) {
  return (
    <Box sx={{ minWidth: 275 }} style={{margin: 20}}>
      {questionArray.length > 0 ? (
        <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
         Question : {questionArray[questionCounter - 1].question}
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Category : {questionArray[questionCounter - 1].category}
        </Typography>

        {[
          ...questionArray[questionCounter - 1].incorrect_answers,
           questionArray[questionCounter - 1].correct_answers
        ].map((options) => {
          return (
            <p>{options}</p>
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
