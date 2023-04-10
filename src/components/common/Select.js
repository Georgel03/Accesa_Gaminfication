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
          label="Game Category"
          onChange={handleChange}
        >
          <MenuItem value={9}>General culture</MenuItem>
          <MenuItem value={10}>Entertainment: Books</MenuItem>
          <MenuItem value={11}>Entertainment: Film</MenuItem>
          <MenuItem value={12}>Entertainment: Music</MenuItem>
          <MenuItem value={13}>Entertainment: Opera and Theatres</MenuItem>
          <MenuItem value={14}>Entertainment: TV</MenuItem>
          <MenuItem value={15 }>Entertainment: Board games</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
