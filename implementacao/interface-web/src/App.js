import React, { useState } from 'react';
import './App.css';
import Context from './Componentes/Context/Context';
import Home from './Componentes/Home/Home';
import Config from './Componentes/Config/Config';
import { Routes, Route, useLocation } from 'react-router-dom';
import unitario1 from './Componentes/Unitario/unitario1';
import Debito from './Componentes/Debito/Debito';
function App() {

 
    const location = useLocation();
    const [itensConfig, setItensConfig] = useState({});

    return ( <div className="App">
    <header className="App-header">
       <Context.Provider value={[itensConfig, setItensConfig]}>
      <div className="screen-terminal">
      <Routes>
       <Route path="/" element={ <Home/>} />
       <Route path="/unitario1" Component={unitario1} />
       <Route path='/debito' Component={Debito} /> 
    </Routes>
       
      </div>
      { ( location.pathname === '/' || location.pathname === '/home' ) &&  <Config/>}
     
     </Context.Provider>
    </header>
    </div>
   

 
   
   

  );
}

export default App;
