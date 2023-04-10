import React from 'react';
import Select from './common/Select';

export default function Game() {
  return (
    <div className='app-main'>
        <h1>Gamification</h1>

        <input placeholder='Question number'/>
        <Select/>
        <input placeholder='Level of dificulty'/>
        
    </div>
  )
}
