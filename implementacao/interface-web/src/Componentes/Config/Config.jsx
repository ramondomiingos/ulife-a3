import React, { useContext } from 'react';
import Context from '../Context/Context';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Config() {
  const { register, getValues } = useForm();
  const [itens, setItens] = useContext(Context);

  return (
    <div
      style={{
        background: '#D9D9D9',
        width: '1024px',
        border: 'solid 3px',
        borderColor: '#000',
        margin: '40px',
        padding: '0px  15px',
      }}
    >
      <h1 style={{ color: '#000', fontSize: '15px' }}>
        {' '}
        <i className="fa fa-cog" aria-hidden="true"></i> Configuração do
        Terminal
      </h1>
      <Form
        onChange={(e) => setItens(getValues())}
        style={{ color: '#000', fontSize: '15px' }}
      >
        <Container>
          <Row>
            <Col>
              <h3 style={{ fontSize: '15px' }}>Formas de pagamento</h3>
              <Form.Check
                type={'checkbox'}
                {...register('pix')}
                id={'pix'}
                label={'PIX'}
              />
              <Form.Check
                type={'checkbox'}
                {...register('debito')}
                id={'debito'}
                label={'Débito'}
              />
              <Form.Check
                type={'checkbox'}
                {...register('bilhete')}
                id={'bilhete'}
                label={'Bilhete Único'}
              />
            </Col>
            <Col>
              <h3 style={{ fontSize: '15px' }}>Tipo de Recargas</h3>
              <Form.Check
                type={'radio'}
                {...register('maquina')}
                value={'qr'}
                id={'qr'}
                label={'QrCode'}
              />
              <Form.Check
                type={'radio'}
                {...register('maquina')}
                id={'Top'}
                value={'top'}
                label={'Cartão Top'}
              />
              <Form.Check
                type={'radio'}
                {...register('maquina')}
                id={'bu'}
                value={'bu'}
                label={'Bilhete Unico'}
              />
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
