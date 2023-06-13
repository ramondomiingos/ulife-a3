import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import requisitando from '../../imagens/requisitando.png'
import React, { useState } from 'react';


export default function QrCode({props}) {
    const [ step, setStep] = useState(1)
    const Step2 =() =>{
        return <>  <i
        onClick={  () => setStep(3)}
        class="fa fa-spinner fa-spin fa-3x fa-fw"
        style={{ fontSize: '60px', padding: '20px'  }}/>
        </>
    }
    const Step1 =() =>{return <>
     <p style={{ fontSize:  '40px'}}> Requisitando ...</p>
  
        <button
        style={{ borderRadius: '100%', background: '#3FB2A9' }}
        align="left"
        onClick={() => {setStep(2)}}
       >
        <img
          src={requisitando}
          alt="requisitando"
          width={'60px'}
          height={'65px'}
          align="left"
          style={{ margin: '30px 30px 30px 30px' }}
        />
      </button>
      </>
    }
    const Step3 =() =>{return <>
        <p style={{ fontSize:  '40px'}}> Finalizado ...</p>
     
           <button
           style={{ borderRadius: '100%', background: '#3FB2A9' }}
           align="left"
           onClick={() => { navigate('/agradecimento')}}
          >
             <i
                      class="fa fa-check"
                      style={{ fontSize: '60px', padding: '20px' }}
                    ></i>
         </button>
         </>
       }
  const navigate = useNavigate()
    return (<>
      <div style={{ margin: '10px' }}>
        <Link to={'/'} style={{ textDecoration: 'none',  fontFamily: 'Roboto',  color: '#2B3C36', fontSize: '20px'}}>
        <i class="fa fa-times" aria-hidden="true"></i>  Cancelar
        </Link>
      </div>

      <div className="homeGreeting">
        <p> QR Code </p>
<Container>
  <Row>
    <Col align="center" >
        {
            step === 1 && <Step1/>
        }
        {
            step === 2 && <Step2/>
        }
        {
            step === 3 && <Step3/>
        }
       
       </Col>
  </Row>
</Container>
        
      </div>
      </>)
}
