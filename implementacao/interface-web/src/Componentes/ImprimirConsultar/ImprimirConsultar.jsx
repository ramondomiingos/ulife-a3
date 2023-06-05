import './ImprimirConsultar.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import impressora from '../../imagens/impressora.png';
import codigoqr1 from '../../imagens/codigo-qr1.png';

const ImprimirConsultar = () => {
  return (
    <div className="barraImprimir">
      <Container>
        <Row>
          <Col align="left">
            <div id="circleImprimir">
              <img
                src={impressora}
                alt="qrcode"
                width={'45px'}
                height={'45px'}
                align="left"
                style={{ margin: '25px 25px 0px 25px' }}
              />
              <p>Imprimir</p>
            </div>
          </Col>
          <Col align="left">
            <div id="circleImprimir">
              <img
                src={codigoqr1}
                alt="qrcode"
                width={'45px'}
                height={'45px'}
                align="left"
                style={{ margin: '25px 25px 0px 25px' }}
              />
              <p>Consultar</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ImprimirConsultar;
