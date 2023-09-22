import '../css/Frequentquestion.css';
import { Row, Col, Accordion, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Frequentquestion() {
  return (
      <div className='content-fq'>
        <Container className='pt-5'>
        <div>
            <h1>Preguntas Frecuentes</h1>
        <img src="" alt="" />
        </div>
            <Row className='m-2 '>
                <Col xs={10} lg={6} className='mx-auto'>
                    <Accordion defaultActiveKey="" >
                        <Accordion.Item eventKey="0" className='border border-2' >
                            <Accordion.Header>¿Qué es ...?</Accordion.Header>
                                <Accordion.Body> 
                               <p className='fq-l'> Somos un restaurante de comida que conecta a miles de comensales de San Miguel de Tucuman contamos con mas de 3 sucursales con servicio en el local o envio a domicilio. Ofrecemos una carta virtual que te permitira, elegir lo que queres comer de una manera rapida, segura y practica.</p>
                                </Accordion.Body>
                        </Accordion.Item>
                            <div className='separator'></div>
                        <Accordion.Item eventKey="1" className='border border-2' >
                            <Accordion.Header>¿Cómo funcionamos?</Accordion.Header>
                                <Accordion.Body> 
                                    <p className='fq-l'>Para poder usar la app, primero tienes que escanear el codigo QR que tienes en la mesa, luego vas a usar una de las dos opciones, si ya sos usuario de la app, seleccionas ingresar, en el caso que seas nuevo, tenes que registrarte para comenzar el pedido, una vez dentro elige lo que quieras comer, finaliza la orden, selecciona la forma que queres pagar y listo!! Disfruta de tu comida </p>
                                </Accordion.Body>
                        </Accordion.Item>
                             <div className='separator'></div>
                        <Accordion.Item eventKey="2" className='border border-2'>
                            <Accordion.Header>¿Cuáles son los métodos de pago?</Accordion.Header>
                                <Accordion.Body>
                                    <h5 className='fq-l'>Los métodos de pago son:</h5>
                                    <ul>
                                      <li className='fq-l'>Pago en efectivo: En la página podrás ver el monto exacto con el que vas a tener que pagar.</li>
                                        <li className='fq-l'>Pago con POS: Podrás pagar con tu tarjeta de crédito o débito en el local.</li>
                                        <li className='fq-l'>Pago Online (tarjeta de crédito o débito) 
                                            Cuando elijas realizar el pago online: Podrás cargar una tarjeta de crédito o débito para abonar el monto del pedido. Esta información es gestionada de forma segura; tus datos no son almacenados en PedidosYa. O podrás seleccionar una tarjeta de crédito o débito que hayas cargado previamente.</li>
                                    </ul>
                                </Accordion.Body>
                        </Accordion.Item>
                            <div className='separator'></div>
                        <Accordion.Item eventKey="3" className='border border-2'>
                            <Accordion.Header>¿Debo estar registrado para hacer un pedido?</Accordion.Header>
                                <Accordion.Body>
                              <p className='fq-l'>Para finalizar y confirmar el pedido debés estar registrado. Podés hacerlo haciendo login a través de Facebook o ingresando los siguientes datos: Nombre, Apellido, Email y Contraseña.</p>
                                </Accordion.Body>
                        </Accordion.Item>
                        <div className='separator'></div>
                        <Accordion.Item eventKey="4" className='border border-2'>
                            <Accordion.Header>politicas de empresa</Accordion.Header>
                                <Accordion.Body>
                                    <ul className='fq-l'>
                                        <li>
                                            <Link to="/Error404" className='fq-link'>Terminos y condiciones</Link>
                                        </li>
                                        <li>
                                            <Link to="/Error404" className='fq-link'>Politicas de privacidad</Link>
                                        </li>
                                        <li>
                                            <Link to="/Error404" className='fq-link'>Boton de arrepentimiento</Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
        
    </div>
  );
}

export default Frequentquestion;