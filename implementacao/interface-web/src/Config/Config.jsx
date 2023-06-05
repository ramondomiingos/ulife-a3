import React, { useContext, useEffect} from "react";
import Context from '../Componentes/Context/Context';
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";

export default function Config() {

  const { register, getValues } = useForm();
  const [itens, setItens] = useContext(Context);


  return (
    <div style={{ background: '#D9D9D9',  width:'1024px', border: 'solid 3px',  borderColor: '#000', margin: '40px' ,padding: '0px  15px'}}> 
    <h1 style={{ color: '#000'}}> <i className="fa fa-cog" aria-hidden="true"></i> Configuração do Terminal</h1>
      <Form onChange={(e) => setItens(getValues())} style={{ color: '#000'}}>
        <Form.Check type={'checkbox'} {...register("pix")} id={'pix'} label={'PIX'}  />
        <Form.Check type={'checkbox'}  {...register("debito")}  id={'debito'} label={'Débito'}  />
        <Form.Check type={'checkbox'}  {...register("bilhete")} id={'bilhete'} label={'Bilhete Único'} />
      </Form>
    </div>
  );
}