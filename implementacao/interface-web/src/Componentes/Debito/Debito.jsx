import { Link } from 'react-router-dom';

export default function Debito({props}) {
    return (<>
      <div style={{ margin: '10px' }}>
        <Link to={'/'} style={{ textDecoration: 'none'}}>
        <i class="fa fa-times" aria-hidden="true"></i>  Cancelar
        </Link>
      </div>

      <div className="homeGreeting">
        <p> Venda débito </p>
      </div>
      </>)
}
