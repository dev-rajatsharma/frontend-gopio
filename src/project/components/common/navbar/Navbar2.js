import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';
import { navigationLinks } from './navbarData';
import flag from '../../../../img/indian flags/indianFlag20.jpeg';
import USflag from '../../../../img/home/USflag.png';
import { Link,NavLink } from 'react-router-dom';

import {renderFaceBookPage} from '../../../utils';
// import './navbar.css';


class Navbar2 extends React.Component{

    renderFlags=()=>{
        return(
            // <div className='d-flex'>
            // <figure className='my-1 mx-3 flag-con'>
            //     <img src={flag} className='img-responsive w-100 h-100' alt='flag'/>
            // </figure>
            // <figure className='my-1 mx-1 flag-con'>
            //     <img src={USflag} className='img-responsive w-100 h-100' alt='flag'/>
            // </figure>
            // </div>
            <Navbar.Brand >
                <img
                    alt="indian flag"
                    src={flag}
                    width="50"
                    height="30"
                    className="d-inline-block align-top mx-1"
                />
                <img
                    alt="indian flag"
                    src={USflag}
                    width="50"
                    height="30"
                    className="d-inline-block align-top mx-1"
                />
                {/* {' React Bootstrap'} */}
                </Navbar.Brand>
        )
    }
    
    renderLinks = () => {
        return (
            <React.Fragment>
                {navigationLinks.map((item, index) => {
                    let className = index===0 ? 'nav-link active' : 'nav-link'
                    return (
                        // <li className={className} key={item.text}>
                            <Nav.Item>
                            <Nav.Link style={{color:'#fff'}}
                                 className={className} href={item.href} eventKey={index+1}
                            activeClassName="selected"
                            activeStyle={{
                                 fontWeight: "bold",
                                 fontSize: 'large'
                               }}
                            >
                            {item.text}
                            </Nav.Link>
                            </Nav.Item>
                        // </li>
                    )
                })}
            </React.Fragment>
        )
    }

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" sticky='top' varient='light' style={{'backgroundImage': 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)'
            }}>
            <Navbar.Brand>{this.renderFlags()}</Navbar.Brand>
                <Navbar.Brand href="home" style={{'color':'#fff'}}>Gopio Virginia</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav activeKey={1}>
                    {/* <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                    {this.renderLinks()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
export default Navbar2