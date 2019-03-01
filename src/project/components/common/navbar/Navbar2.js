import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';
import { navigationLinks } from './navbarData';
import flag from '../../../../img/indian flags/indianFlag20.jpeg';
import USflag from '../../../../img/home/USflag.png';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../../../img/logo2.jpeg';
import {renderFaceBookPage} from '../../../utils';
import VerticallyCenteredModal from '../../common/modal/VerticallyCenteredModal';

// import './navbar.css';


class Navbar2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            modalPic: {}
        }
    }
    modalOpen = (e, pic, caption) =>{
        this.setState({
            modalPic:{'src':pic, 'caption':caption},
            modalShow: true})
    }
    modalClose = () =>{
        this.setState({ modalShow: false})
    }
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
                            // <LinkContainer to={item.href}
                            // className={className}
                            // activeClassName="selected"
                            // activeStyle={{
                            //     fontWeight: "bold",
                            //     fontSize: 'large'
                            // }}
                            // >
                                <Nav.Item>
                                <Nav.Link style={{color:'#fff'}} eventKey={index+1} href={item.href}
                                >
                                {item.text}
                                </Nav.Link>
                                </Nav.Item>
                            // </LinkContainer>
                        // </li>
                    )
                })}
                <Nav.Item>
                    <Nav.Link href='https://www.facebook.com/gopiova/' target='_blank' eventKey={navigationLinks.length+1} >
                    {renderFaceBookPage()}</Nav.Link>
                </Nav.Item>
            </React.Fragment>
        )
    }

    render(){
        let {modalShow, modalPic} = this.state
        return(
            <Navbar collapseOnSelect expand="lg" sticky='top' varient='light' style={{'backgroundImage': 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)'
            }}>
            <Navbar.Brand>{this.renderFlags()}</Navbar.Brand>
            {/* <Navbar.Brand href="home" style={{'color':'#fff'}}>Gopio Virginia</Navbar.Brand> */}

      <img
        alt="gopio logo"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top mx-2"
        onClick={(e)=>this.modalOpen(e,logo)}
      />
            <Navbar.Brand href="home" style={{'color':'#fff'}}>
      {' Gopio Virginia'}
    </Navbar.Brand>

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
                    <Nav  className="justify-content-end" >
                    {/* <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                    {this.renderLinks()}
                    </Nav>
                </Navbar.Collapse>
                <VerticallyCenteredModal show={modalShow} onHide={this.modalClose} pic={modalPic}/>
            </Navbar>

        )
    }
}
export default Navbar2