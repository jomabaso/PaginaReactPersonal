import { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './contacto.css'
import fb from '../../assets/images/contactos/fb.png'
import ig from '../../assets/images/contactos/instagram.png'
import ol from '../../assets/images/contactos/outlock.png'
import cel from '../../assets/images/contactos/cel.png'
export default class contacto extends Component {

    render() {
        return (
            <Container className={'contacto'}>
                <Card.Title style={{textAlign:'center', fontWeight:'bold'}}>CONTACTO</Card.Title>

                <Row className={'centro-row'}>                    
                    <Col className={'divcontacto'} xs={5}>
                        <img src={fb} style={{ margin: '1em auto', height: '6em', alignSelf: "center" }} />
                        <h5>Facebook: Jorge Barrientos</h5>
                    </Col>

                    <Col className={'divcontacto'} xs={5}>
                        <img src={ig} style={{ margin: '1em auto', height: '6em', alignSelf: "center" }} />
                        <h5>Instagram: Jomabaso</h5>
                    </Col>

                    <Col className={'divcontacto'} xs={5}>
                        <img src={ol} style={{ margin: '1em auto', height: '6em', alignSelf: "center" }} />
                        <h5>Correos:</h5>
                        <ul>
                            <li>Elgigototo@hotmail.com</li>
                            <li>GiorgioBpm@gmail.com</li>
                        </ul>
                    </Col>

                    <Col className={'divcontacto'} xs={5}>
                        <img src={cel} style={{ margin: '1em auto', height: '6em', alignSelf: "center" }} />
                        <h5>Celular: +502 4210-1001</h5>
                    </Col>

                </Row>

            </Container>


        );
    }

}