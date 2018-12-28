import React from 'react';
import { navigationLinks } from './navbarData';
import { Link } from 'react-router-dom';
import './navbar.css';
import flag from '../../../../img/indian flags/flag4.svg';
import facebook_logo from '../../../../img/home/facebook_logo.png';

export default class Navbar extends React.Component {
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
    renderIndianFlag=()=>{
        return(
            <figure className='m-1 flag-con'>
                <img src={flag} className='img-responsive w-100 h-100' alt='flag'/>
            </figure>
        )
    }
    renderOrganizationHeader = () => {
        return (
            <h2 className='text-center organization-header'
            onClick={()=> window.location.href = '/home'
                // this.props.history.push('/home')
            }
            >
                GOPIO - Virginia</h2>
        )
    }
    renderNavLinks = () => {
        return (
            <nav className='navbar navbar-expand-sm justify-content-end'>
                <ul className='navbar-nav'>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }

    render() {
        return (
            <header className='fixed-top d-flex header-con'>
                {this.renderIndianFlag()}
                {this.renderOrganizationHeader()}
                {this.renderNavLinks()}
                <a href='https://www.facebook.com/gopiova/'
                    className='facebook-con'
                    target='_blank' rel='noopener noreferrer'>
                        <img src={facebook_logo} className='img-responsive w-100 h-100' alt='facebook' />
                </a>
            </header>
        )
    }
}
