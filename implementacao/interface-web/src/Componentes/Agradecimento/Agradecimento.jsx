import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

export default function Agradecimento({props}) {
    const navigate = useNavigate()
    return  <Container>
  <Row>
    <Col align="center"  onClick={() => navigate('/')}>
     <div className="homeGreeting" style={{ padding: '90px'}}>
        <p> Obrigado por  <br></br>usar nossos serviços </p>
        </div>
        </Col>
  </Row>
</Container>
        
}