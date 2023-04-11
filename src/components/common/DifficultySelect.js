import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({

   
    gameType,
    handleChange

}) {
  
  return (
    <Box sx={{ minWidth: 220 }} style={{marginTop: 20}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Game Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gameType}
          label="Game Difficulty"
          onChange={handleChange}
        >
          <MenuItem value={'easy'}>Easy</MenuItem>
          <MenuItem value={'medium'}>Medium</MenuItem>
          <MenuItem value={'hard'}>Hard</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}