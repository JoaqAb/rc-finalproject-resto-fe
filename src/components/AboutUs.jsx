import {Container, Row, Col, Carousel} from 'react-bootstrap';
import { Card, Icon, Image } from 'semantic-ui-react'
import './Aboutus.css';

function AboutUs() {
  return (
    <Container className='container-aboutus'>
                
            <Row className='row'>
            <Row>
                <Col xs={12} lg={12}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h1 className='tittle-about' ><strong>INTEGRANTES DE APPETITO</strong></h1>
                    </div>
                </Col>
            </Row>
            <Col className='d-flex justify-content-center align-items-center'>
                <Carousel  className='carousel' data-bs-theme="dark">
                <Carousel.Item>
                         <Card >
                         <Image src='../src/images/Lucas-Albarado.png' className='round-image' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Lucas Albarado</Card.Header>
                                <Card.Meta>
                                    <span className='date'>APPETITO</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a><Icon name='facebook f' /></a>
                                <a><Icon name='twitter' /></a>
                                <a><Icon name='instagram' /></a>
                            </Card.Content>
                         </Card>
                </Carousel.Item>
                <Carousel.Item>
                         <Card>
                            <Image src='../src/images/joaquin.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Joaquin Abuin</Card.Header>
                                <Card.Meta>
                                    <span className='date'>APPETITO</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a><Icon name='facebook f' /></a>
                                <a><Icon name='twitter' /></a>
                                <a><Icon name='instagram' /></a>
                            </Card.Content>
                         </Card>
                </Carousel.Item>
                <Carousel.Item>
                         <Card>
                            <Image src='../src/images/Federico-khouri.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Federico Khouri</Card.Header>
                                <Card.Meta>
                                    <span className='date'>APPETITO</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a><Icon name='facebook f' /></a>
                                <a><Icon name='twitter' /></a>
                                <a><Icon name='instagram' /></a>
                            </Card.Content>
                         </Card>
                </Carousel.Item>
                <Carousel.Item>
                         <Card>
                            <Image src='../src/images/Lucas-Campisi.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Lucas Campisi</Card.Header>
                                <Card.Meta>
                                    <span className='date'>APPETITO</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a><Icon name='facebook f' /></a>
                                <a><Icon name='twitter' /></a>
                                <a><Icon name='instagram' /></a>
                            </Card.Content>
                         </Card>
                </Carousel.Item>
                <Carousel.Item >
                         <Card className='card'>
                            <Image src='../src/images/joaquin.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Valentina muratore</Card.Header>
                                <Card.Meta>
                                    <span className='date'>APPETITO</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra >
                                <a><Icon name='facebook f' /></a>
                                <a><Icon name='twitter' /></a>
                                <a><Icon name='instagram' /></a>
                            </Card.Content>
                         </Card>
                </Carousel.Item>
                
                
                
                </Carousel>
            </Col>
            <Col xs={12} lg={7}>
                <div className='information-about'>

                <h1 className='tittle-about' >Appetito</h1>  
                <h3 className='h3-aboutus'>Nuestra Mision:</h3>
                <p className='p-aboutus'>Appetito es mucho más que un bar, es una familia dispuesta a crecer mientras le brinda a sus clientes la mayor satisfacción con cada uno de sus servicios en coctelería, con un ambiente agradable y cómodo en el que podrán disfrutar de sus bebidas favoritas, buena música y un espacio bailable con una excelente atención para los invitados. </p>          
                <h3 className='h3-aboutus'>Nuestra Vision:</h3>
                <p className='p-aboutus'>Aspiramos a ser reconocidos en todo el país y fuera de él, como un bar que es capaz de superar las más altas expectativas de nuestros clientes, además de continuar innovando para adaptarnos a los tiempos que vienen con nuevas modalidades y tecnologías que garanticen la mejor estadía en nuestros ambientes.</p>
                
                
                </div>
            </Col>
            </Row>
            
        </Container>
  );
}

export default AboutUs;