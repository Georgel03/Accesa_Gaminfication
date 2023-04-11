import './App.css';
import Game from './components/Game';
import PlayGame from './components/PlayGame';
import Result from './components/common/Result';

import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className='app-main'>
      <Routes>
        <Route exact path="/" element={<Game />} />
        <Route exact path='/play' element={<PlayGame />} />
        <Route exact path='/result' element={<Result />} />
      </Routes>
     </div>
    
  );
}

export default App;
