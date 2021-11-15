import React, { useState } from 'react';
import './App.css';

function App() {

  const [repetidor, getrepetidor] = useState('');
  
  const actualizarState = e =>{
    let text = e.target.value;
    getrepetidor(text);
  }    
  
    return (
      <div>
        <h1>Un repetidor</h1>
        <input 
          onChange={actualizarState}
          type="text" 
          placeholder="Empieza a escribir algo" 
        />
        <p className="repeater">{repetidor}</p>
      </div>
    );
  
}

export default App;
