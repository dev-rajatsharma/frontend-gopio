import React from 'react';
import { navigationLinks } from './navbarData';
import { Link } from 'react-router-dom';
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
            <span className='text-center org-title-con'>
                <Link className="navbar-text text-center organization-header" to='/home'>
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
                    return (
                        <li className='nav-item'>
                            <Link className='nav-link' to={item.href}>{item.text}</Link>
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
            <nav className='navbar navbar-expand-sm fixed-top navbar-con'>
                {this.renderIndianFlag()}
                {this.renderOrganizationHeader()}
                {/* {this.renderOrganizationPic()} */}

                <button type="button" class="navbar-toggler"
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse nav-links-con" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        {this.renderLinks()}
                        <li className='nav-item facebook-con'>
                            <a href='https://www.facebook.com/gopiova/'
                                className=''
                                target='_blank' rel='noopener noreferrer'>
                                    <img src={facebook_logo} className='img-responsive w-100 h-100' alt='facebook' />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
