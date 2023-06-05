import './BarraOpcoes.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import qrCode from '../../imagens/QRcode.png'
import CartaoCredito from '../../imagens/cartao-de-credito 1.png'
function BarraOpcoes() {
    return (
      <div className="barra">
        <Container >
          <Row>
            <Col >
              <div
                id="iconAcation"
                style={{
                  border: '50px solid #D9D9D9',
                  borderRadius: '500px',
                  margin: '20px 0px 0px 0px',
                  width: '50px',
                  height: '50px',
                }}
              >
                <img src={qrCode} alt="qrcode" width={'50px'} height={'50px'}  />
              </div>
              <p>Pix</p>
            </Col>
            <Col>
              <div>
                <img
                  src={CartaoCredito}
                  alt="qrcode"
                  width={'50px'}
                  height={'50px'}
                />
              </div>
              <p>Débito</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default BarraOpcoes;
  