import React, { Component } from 'react';
import { Container, Card, CardGroup, CardDeck, CardColumns, Col, Row } from 'react-bootstrap';
import jav from '../../assets/images/logos/java.png';
import py from '../../assets/images/logos/python.png';
import javs from '../../assets/images/logos/JavaScript.png';
import ang from '../../assets/images/logos/angular.png';
import cs from '../../assets/images/logos/Csharp.png';
import cmas from '../../assets/images/logos/C++_.png';
import html from '../../assets/images/logos/html.png';
import css from '../../assets/images/logos/css.png';

import './lenguajesyframeworks.css';

export default class lyf extends Component {



    render() {

        const lenguajes = [
            { 'titulo': 'JAVA', 'imagen': jav },
            { 'titulo': 'PYTHON', 'imagen': py },
            { 'titulo': 'JAVASCRIPT', 'imagen': javs },
            { 'titulo': 'ANGULAR', 'imagen': ang },
            { 'titulo': 'C#', 'imagen': cs },
            { 'titulo': 'C++', 'imagen': cmas },
            { 'titulo': 'HTML', 'imagen': html },
            { 'titulo': 'CSS', 'imagen': css }]

        return (
            <Container id={'contenedor-principal'}>
                <CardDeck>

                    {lenguajes.map((lenyfrem, index) => (
                        <Card id={'Tarjetas-Sin-Bordes'} data-index={index}>
                            <Card.Body >
                                <Card.Img style={{ width: '85%' }} src={lenyfrem.imagen} />
                                <Card.Title style={{marginTop:'1vw', justifyContent: 'center', fontSize: '1vw', fontWeight: 'bold' }}>{lenyfrem.titulo}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))}



                </CardDeck>
            </Container>
        );
    }

}