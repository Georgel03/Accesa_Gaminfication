import React from 'react';
import Select from './common/Select';
import Input from './common/Input';

export default function Game() {
  const [gameType, setGameType] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
    setGameType(event.target.value);
  };
  return (
    <div className='app-main'>
        <h1>Gamification</h1>
        <Input />
        <Select 
        gameType={gameType} 
        handleChange={handleChange}/>
        <input placeholder='Level of dificulty'/>
        
    </div>
  )
}
