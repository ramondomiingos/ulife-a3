import { Link } from 'react-router-dom';
import maquinaDebito from '../../imagens/maquina-debito.png'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
export default function Debito({props}) {
  const navigate = useNavigate()
    return (<>
      <div style={{ margin: '10px' }}>
        <Link to={'/'} style={{ textDecoration: 'none',  fontFamily: 'Roboto',  color: '#2B3C36', fontSize: '20px'}}>
        <i class="fa fa-times" aria-hidden="true"></i>  Cancelar
        </Link>
      </div>

      <div className="homeGreeting">
        <p> Venda débito </p>
<Container>
  <Row>
    <Col align="center" >
  <button
         style={{ borderRadius: '100%', background: '#3FB2A9' }}
         align="left"
         onClick={() => { navigate('/debitoStep2')}}
        >
         <img
           src={maquinaDebito}
           alt="qrcode"
           width={'50px'}
           height={'55px'}
           align="left"
           style={{ margin: '30px 30px 30px 30px' }}
         />
       </button>
       <p style={{ fontSize:  '20px'}}> Insira seu cartão de débito </p>
       </Col>
  </Row>
</Container>
        
       
       
      </div>
      </>)
}
