import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({

    gameDifficulty,
    handleChange

}) {
  
  return (
    <Box sx={{ minWidth: 220 }} style={{marginTop: 20}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gameDifficulty}
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
