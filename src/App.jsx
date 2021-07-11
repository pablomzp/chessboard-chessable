import './App.scss';
import { Nav, Board } from './components/index';
import Slider from 'react-input-slider';
import { useState } from 'react';

const App = () => {

  const [state, setState] = useState({ x: 500 });

  return(
    <div className="main">
      <Nav/>
      <h2>Change the size of the board:</h2>
      <div className="main__slider">
        <Slider
          axis="x"
          x={state.x}
          onChange={({ x }) => setState(state => ({ ...state, x }))}
          xmin={100}
          xmax={1000}
        />
        <h3>{state.x}x{state.x} px</h3>
      </div>
      <div className="main__board-container">
        <Board size={state.x}/>
      </div>
    </div>
  );

};

export default App;
