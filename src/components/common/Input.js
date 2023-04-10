import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({
    setGameCount,
    gameCount

}) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      
    >
      <TextField 
      fullWidth 
      type="number"
      id="outlined-basic" 
      label="Number of Questions" 
      variant="outlined" 
      onChange={(e) => setGameCount(e.target.value)}
      value={gameCount}
      />
      
    </Box>
  );
}
