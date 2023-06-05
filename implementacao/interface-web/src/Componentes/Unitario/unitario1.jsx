import { Link } from 'react-router-dom';
import ImprimirConsultar from '../ImprimirConsultar/ImprimirConsultar';
import qrCode from '../../imagens/QRcode.png'
import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
export default function Unitario1({}) {
    const navigate = useNavigate()
    const [showValues, setShowValues] = useState(false);
    const styleValuesTickets = {
borderRadius: '25px',
margin: '25px',
color: '#000',
backgroundColor: '#D9D9D9', 
    }
  return (
    <>
      <div style={{ margin: '10px' }}>
        <Link to={'/'}>
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </Link>
      </div>

      <div className="homeGreeting">
        <p> Selecione o que deseja comprar </p>
      </div>
      <Container>

      
      <div style={{ margin: '40px' }}>
        <Row>
            <Col>
       
        <button
          style={{ borderRadius: '100%', background: '#3FB2A9' }}
          align="left"
          onClick={() => setShowValues(!showValues)}
        >
          <img
            src={qrCode}
            alt="qrcode"
            width={'50px'}
            height={'55px'}
            align="left"
            style={{ margin: '30px 30px 30px 30px' }}
          />
        </button>
        <p style={{ color: '#000', display: 'inline-flex'}}>Unitário</p>
        </Col>
        <Col>
        {showValues && <>
      <button style={styleValuesTickets} onClick={ () => {  navigate("/debito") }}>
        1 ticket = R$ 4,40
      </button>
      <button style={styleValuesTickets} onClick={ () => {  navigate("/debito") }}>
        2 ticket = R$ 8,80
      </button >
        </>}
        </Col>
      </Row>
      </div>
      
      </Container>
      <ImprimirConsultar />
    </>
  );
}
