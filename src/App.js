import './App.css';
import Game from './components/Game';
import PlayGame from './components/PlayGame';
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
      </Routes>
     </div>
    
  );
}

export default App;
