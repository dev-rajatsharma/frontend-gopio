import React from 'react';
import { navigationLinks } from './navbarData';
import { Link,NavLink } from 'react-router-dom';
import './navbar.css';
import flag from '../../../../img/indian flags/indianFlag20.jpeg';
import USflag from '../../../../img/home/USflag.png';
import {renderFaceBookPage} from '../../../utils';
    

export default class Navbar extends React.Component {
    renderFlags=()=>{
        return(
            <div className='d-flex'>
            <figure className='my-1 mx-3 flag-con'>
                <img src={flag} className='img-responsive w-100 h-100' alt='flag'/>
            </figure>
            <figure className='my-1 mx-1 flag-con'>
                <img src={USflag} className='img-responsive w-100 h-100' alt='flag'/>
            </figure>
            </div>
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
    
    renderLinks = () => {
        return (
            <React.Fragment>
                {navigationLinks.map((item, index) => {
                    let className = index===0 ? 'nav-item active' : 'nav-item'
                    return (
                        <li className={className} key={item.text}>
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
            <nav className='navbar navbar-expand-md fixed-top bg-dark'>
                    {this.renderFlags()}
                    {this.renderOrganizationHeader()}
                    {/* {this.renderOrganizationPic()} */}

                    {/* <-- Collapse button --> */}
                    <button type="button"
                            className="navbar-toggler"
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <-- Collapsible content --> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* <-- Links --> */}
                        <ul className="navbar-nav ml-auto">
                            {this.renderLinks()}
                            <li className='nav-item'>
                                {renderFaceBookPage()}
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
