import React from 'react';
import { navigationLinks } from './navbarData';
import { Link,NavLink } from 'react-router-dom';
import './navbar.css';
import flag from '../../../../img/indian flags/flag4.svg';
import USflag from '../../../../img/home/USflag.png';
// import facebook_logo from '../../../../img/home/facebook_logo.png';
// import { FacebookIcon } from 'react-share';
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
    // renderOrganizationPic=()=>{
    //     return(
    //         <figure className='org-pic-con'>
    //             <img src={} className='img-responsive w-100 h-100' alt='gopio board'/>
    //         </figure>
    //     )
    // }
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
    // renderFaceBookPage=()=>{
    //     return(
    //         <div className='facebook-con' title='Connect on facebook'>
    //             <a href='https://www.facebook.com/gopiova/'
    //                 className=''
    //                 target='_blank' rel='noopener noreferrer'>
    //                 <FacebookIcon size={32} round={true} />
    //                     {/* <img src={facebook_logo} className='img-responsive rounded-circle w-100 h-100' alt='facebook' /> */}
    //             </a>
    //         </div>
    //     )
    // }
    
    
    render() {
        return (
            // <-- Navbar -->
            <nav className='navbar navbar-expand-sm fixed-top navbar-con'>
                {this.renderFlags()}
                {this.renderOrganizationHeader()}
                {/* {this.renderOrganizationPic()} */}

                {/* <-- Collapse button --> */}
                <button type="button" className="navbar-toggler"
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <-- Collapsible content --> */}
                <div className="collapse navbar-collapse nav-links-con" id="navbarSupportedContent">

                {/* <-- Links --> */}
                    <ul className="navbar-nav">
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
