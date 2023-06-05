import BarraOpcoes from '../BarraOpçoes/BarraOpcoes';
import React from 'react';
import './Home.css';

function Home() {
    return (<>
      <div className="homeGreeting">
        <p > 
          Seja bem vindo <br/> ao terminal
        </p>
        <p style={ { 'fontSize':'25px', padding: 0, margin: '0px 0px 0px 30px'} } >
        Selecione uma das opções disponiveis: 

        </p>
      </div>
      <BarraOpcoes/>
      </>
    );
  }
  
  export default Home;
  