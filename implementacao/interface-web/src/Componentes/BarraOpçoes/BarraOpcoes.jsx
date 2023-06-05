import './BarraOpcoes.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import qrCode from '../../imagens/QRcode.png'
import ticket from '../../imagens/ticket.png'

import CartaoCredito from '../../imagens/cartao-de-credito 1.png'
import Context from '../Context/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function BarraOpcoes() {
    const [itens, setItens] = useContext(Context);
    return (
      <div className="barra">
        <Container>
          <Row>
            {itens.pix && (
              <Col align="center">
                <Link to={ 'unitario1'}>
                <div id="circle">
                  <img
                    src={qrCode}
                    alt="qrcode"
                    width={'90px'}
                    height={'90px'}
                    style={{ margin: '25px' }}
                  />
                  <p>Pix</p>
                </div>
                </Link>
              </Col>
            )}
            {itens.debito && (
              <Col align="center">
                <div id="circle">
                  <img
                    src={CartaoCredito}
                    alt="CartaoCredito"
                    width={'90px'}
                    height={'90px'}
                    style={{ margin: '25px' }}
                  />
                  <p>Débito</p>
                </div>
              </Col>
            )}
            {itens.bilhete && (
              <Col align="center">
                <div id="circle">
                  <img
                    src={ticket}
                    alt="ticket"
                    width={'90px'}
                    height={'90px'}
                    style={{ margin: '25px' }}
                  />
                  <p>BilheteÚnico</p>
                </div>
              </Col>
            )}
            {!itens.bilhete && !itens.pix && !itens.debito && (
              <Col align="center">
                <div>
                  <p>
                    {' '}
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>{' '}
                    Configure as opções deste terminal{' '}
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                  </p>{' '}
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
  
  export default BarraOpcoes;
  