import { Link } from 'react-router-dom';
import ImprimirConsultar from '../ImprimirConsultar/ImprimirConsultar';

export default function unitario1() {
  return (<>
    <div style={{ margin: '10px'}}>
        <Link to={'/'}>
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </Link>
     
    </div>
    
    <div className='homeGreeting'>
      <p> Selecione o que deseja comprar </p>
    </div>
    <div>
    <p>asdasd</p>
    </div>
  
    <ImprimirConsultar/>
  
    </>
  );
}
