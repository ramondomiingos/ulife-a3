import { Link } from 'react-router-dom';
import password from '../../imagens/password.png';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cartaoMaquina from '../../imagens/cartaoMaquina.png'

export default function DebitoStep2({ props }) {
  
  const [tentativas, setTentativas] = useState(0);
  const [exibeModal, setExibeModal] = useState(false);
  const [exibeModalProcessando, setExibeModalProcessando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [ retireCartao, setRetireCartao]= useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (tentativas > 3) {
      navigate('/');
    }
  });
  return (
    <>
      <Modal show={exibeModal} onHide={() => setExibeModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Testes de fluxos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Você digitou a sua senha. Para fins de testes, você digitou certa ou
          errada ?{' '}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setExibeModal(false);
              setTentativas(tentativas + 1);
            }}
          >
            Errada
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setExibeModal(false);
              setExibeModalProcessando(true);
            }}
          >
            Correta
          </Button>
        </Modal.Footer>
      </Modal>
      {!exibeModalProcessando && !sucesso && !retireCartao && (
        <>
          <div style={{ margin: '10px' }}>
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
                fontFamily: 'Roboto',
                color: '#2B3C36',
                fontSize: '20px',
              }}
            >
              <i class="fa fa-times" aria-hidden="true"></i> Cancelar
            </Link>
          </div>

          <div className="homeGreeting">
            <p> Venda débito </p>
            <Container>
              <Row>
                <Col align="center">
                  <button
                    style={{ borderRadius: '100%', background: '#3FB2A9' }}
                    align="left"
                    onClick={() => setExibeModal(true)}
                  >
                    <img
                      src={password}
                      alt="password"
                      width={'80px'}
                      height={'85px'}
                      align="left"
                      style={{ margin: '30px 30px 30px 30px' }}
                    />
                  </button>
                  <p style={{ fontSize: '20px' }}> Insira sua senha </p>
                  {tentativas > 0 && (
                    <p style={{ fontSize: '15px', color: 'red' }}>
                      Senha incorreta, você tem {tentativas}/3 tentivas.{' '}
                      {tentativas === 3 &&
                        'Esta é sua última tentiva, em caso de falha, você retornará ao Inicio.'}
                    </p>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}

      {exibeModalProcessando && !sucesso && (
        <>
          <div style={{ margin: '10px' }}>
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
                fontFamily: 'Roboto',
                color: '#2B3C36',
                fontSize: '20px',
              }}
            >
              <i class="fa fa-times" aria-hidden="true"></i> Cancelar
            </Link>
          </div>

          <div className="homeGreeting">
            <p> Venda débito </p>
            <Container>
              <Row>
                <Col align="center">
                  <button
                    style={{
                      borderRadius: '100%',
                      background: '#3FB2A9',
                      width: '100px',
                      height: '100px',
                    }}
                    align="left"
                    onClick={() => 
                    {
                      setExibeModalProcessando(false);
                      setSucesso(true);
                    }}
                  >
                    <i
                      class="fa fa-spinner fa-spin fa-3x fa-fw"
                      style={{ fontSize: '60px', padding: '20px' }}
                    ></i>
                  </button>
                  <p style={{ fontSize: '20px' }}>
                    {' '}
                    Validando os dados, aguarde !
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
      
      {sucesso && (
        <>
          <div style={{ margin: '10px' }}>
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
                fontFamily: 'Roboto',
                color: '#2B3C36',
                fontSize: '20px',
              }}
            >
              <i class="fa fa-times" aria-hidden="true"></i> Cancelar
            </Link>
          </div>

          <div className="homeGreeting">
            <p> Venda débito </p>
            <Container>
              <Row>
                <Col align="center">
                  <p style={{ fontSize: '20px' }}>Transação Aprovada</p>
                  <button
                    style={{
                      borderRadius: '100%',
                      background: '#3FB2A9',
                      width: '100px',
                      height: '100px',
                    }}
                    align="left"
                    onClick={() =>  {
                      setRetireCartao(true)
                      setSucesso(false)
                    }}
                  >
                    <i
                      class="fa fa-check"
                      style={{ fontSize: '60px', padding: '20px' }}
                    ></i>
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}

{retireCartao && (
        <>
          <div style={{ margin: '10px' }}>
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
                fontFamily: 'Roboto',
                color: '#2B3C36',
                fontSize: '20px',
              }}
            >
              <i class="fa fa-times" aria-hidden="true"></i> Cancelar
            </Link>
          </div>

          <div className="homeGreeting">
            <p> Venda débito </p>
            <Container>
              <Row>
                <Col align="center">
                  <p style={{ fontSize: '20px' }}>Retire seu cartão</p>
                  <button
                    style={{
                      borderRadius: '100%',
                      background: '#3FB2A9',
                      width: '100px',
                      height: '100px',
                    }}
                    align="left"
                    onClick={() => navigate('/QrCode')}
                  > <img
                  src={cartaoMaquina}
                  alt="cartaoMaquina"
                  width={'50px'}
                  height={'55px'}
                  style={{ margin: '25px' }}
                />
                    
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  );
}
