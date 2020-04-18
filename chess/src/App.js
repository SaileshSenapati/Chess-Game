import React, { useState } from 'react';
import './App.css';
import Chess from "./chess"

function App() {
  const [homeFlag , setHomeFlag] = useState(true)
  return (
    <div className="App">
      <div className='welcome'>
        {homeFlag ? <div className='welcome-text'>
          <h1>Classic Chess</h1>
          <button className="start-btn" onClick={()=>setHomeFlag(false)}><h4>Start the Game</h4></button>
        </div>
        :<div>
          <Chess />
        </div>}
      </div>
    </div>
  );
}

export default App;
