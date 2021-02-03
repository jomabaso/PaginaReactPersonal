import React, { Component } from 'react';
import './Info.css'
import {Card} from 'react-bootstrap';
import fotopersonal  from '../../assets/images/Jorge-rounded.png'

class Info extends Component {
    
    
    render() {
        var quehago= 'Practico todos los conocimientos adquiridos a través del tiempo para construir aplicaciones con lógica, inteligencia, y sobre todo paciencia.';
        var filosofia= '“Con unos y ceros explico, lo que en mi mente imagino.”'
        var dedondevengo = 'Nací en San Marcos, Guatemala el 21 de diciembre de 1995, actualmente estudio ingeniería en sistemas en la universidad Rafael Landívar sede Quetzaltenango, y cuento con más del 95 % de la carrera finalizada.'
        var medirijo = 'Me dirijo a afrontar todos los problemas y obstáculos para cumplir con mis objetivos con firmeza y determinación.'
        return (
            
            <Card id='card'>
                <Card.Img style= {{backgroundColor: '#eeeeee', padding: "20%", paddingBottom: "5%"}} variant="top" src={fotopersonal} />
                <Card.Body>
                    <Card.Title>Jorge Mario Barrientos Soto.</Card.Title>
                    <Card.Text style = {{textAlign: 'justify'}}> <Card.Text style = {{fontWeight: 'bold'}} > ¿Qué hago? </Card.Text>   {quehago} <br/><br/> <Card.Text style={{textAlign: 'center',fontStyle: 'oblique'}}>{filosofia}</Card.Text> </Card.Text>
                    <Card.Text style = {{textAlign: 'justify'}}> <Card.Text style = {{fontWeight: 'bold'}} > ¿De dónde vengo? </Card.Text> {dedondevengo} </Card.Text> <br/>
                    <Card.Text style = {{textAlign: 'justify'}}> <Card.Text style = {{fontWeight: 'bold'}} > ¿Hacia dónde me dirijo? </Card.Text> {medirijo} </Card.Text> <br/>
                </Card.Body>
            </Card>
        
        )
    }
}

export default Info;
