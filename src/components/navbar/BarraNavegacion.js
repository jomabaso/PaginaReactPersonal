import React, { Component} from "react";
import { Navbar, Container , Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './BarraNavegacion.css'


export default class BarraNavegacion extends Component {


    render() {
        return (
            <Navbar id="estilonav" style= {{ backgroundColor: '#eeeeee', display:"flex" }} >
                <Navbar.Brand style={{fontFamily: 'Fredoka One'}} href="#home" >JORGE MARIO BARRIENTOS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" style= {{ backgroundColor: '#eeeeee'}}>
                    <Nav className="mr-auto" >
                        <NavDropdown title="Lenguajes y frameworks" id="basic-nav-dropdown" style= {{ backgroundColor: '#eeeeee'}}>
                            <NavDropdown.Item >Java</NavDropdown.Item>
                            <NavDropdown.Item >Python</NavDropdown.Item>
                            <NavDropdown.Item >Javascript</NavDropdown.Item>
                            <NavDropdown.Item >Angular</NavDropdown.Item>
                            <NavDropdown.Item >C#</NavDropdown.Item>
                            <NavDropdown.Item >C++</NavDropdown.Item>
                            <NavDropdown.Item >Django</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-success">CONTACTO</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}