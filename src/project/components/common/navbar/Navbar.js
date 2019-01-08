import React from 'react';
import { navigationLinks } from './navbarData';
import { Link,NavLink } from 'react-router-dom';
import './navbar.css';
import flag from '../../../../img/indian flags/flag4.svg';
import orgPic from '../../../../img/home/orgPic.jpeg';
import facebook_logo from '../../../../img/home/facebook_logo.png';

export default class Navbar extends React.Component {
    renderIndianFlag=()=>{
        return(
            <figure className='my-1 mx-4 flag-con'>
                <img src={flag} className='img-responsive w-100 h-100' alt='flag'/>
            </figure>
        )
    }
    renderOrganizationHeader = () => {
        return (
            <span className='navbar-brand text-center org-title-con'>
                <Link className="organization-header" to='/home'>
                    GOPIO - Virginia
                </Link>
            </span>
        )
    }
    renderOrganizationPic=()=>{
        return(
            <figure className='org-pic-con'>
                <img src={orgPic} className='img-responsive w-100 h-100' alt='gopio board'/>
            </figure>
        )
    }
    renderLinks = () => {
        return (
            <React.Fragment>
                {navigationLinks.map((item, index) => {
                    let className = index===0 ? 'nav-item active' : 'nav-item'
                    return (
                        <li className={className}>
                            <NavLink className='nav-link' to={item.href}
                            activeClassName="selected"
                            activeStyle={{
                                fontWeight: "bold",
                                fontSize: 'large'
                              }}
                            >{item.text}</NavLink>
                        </li>
                    )
                })}
            </React.Fragment>
        )
    }
    handleClickLogo = () => {
        // this.props.history.loca
    }
    
    
    render() {
        return (
            // <-- Navbar -->
            <nav className='navbar navbar-expand-sm fixed-top navbar-con'>
                {this.renderIndianFlag()}
                {this.renderOrganizationHeader()}
                {/* {this.renderOrganizationPic()} */}

                {/* <-- Collapse button --> */}
                <button type="button" class="navbar-toggler"
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <-- Collapsible content --> */}
                <div class="collapse navbar-collapse nav-links-con" id="navbarSupportedContent">

                {/* <-- Links --> */}
                    <ul class="navbar-nav">
                        {this.renderLinks()}
                        <li className='nav-item facebook-con' title='Connect on facebook'>
                            <a href='https://www.facebook.com/gopiova/'
                                className=''
                                target='_blank' rel='noopener noreferrer'>
                                    <img src={facebook_logo} className='img-responsive rounded-circle w-100 h-100' alt='facebook' />
                            </a>
                        </li>
                    </ul>
                    {/* <-- /. Links --> */}
                </div>
                {/* <-- /. Collapsible content --> */}
            </nav>
            // <--/. Navbar -->
        )
    }
}
