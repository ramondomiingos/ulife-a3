import React, { useState } from 'react';
import './App.css';
import Context from './Componentes/Context/Context';
import Home from './Componentes/Home/Home';
import Config from './Config/Config';

function App() {
  const [itensConfig, setItensConfig] = useState([ 'pix','debito', 'bilhete']);
  return (
   
    <div className="App">
      <header className="App-header">
         <Context.Provider value={[itensConfig, setItensConfig]}>
        <div className="screen-terminal">
          <Home/>
        </div>
        <Config/>
       </Context.Provider>
      </header>
     
    </div>

  );
}

export default App;
