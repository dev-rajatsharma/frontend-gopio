import React from 'react';
import { navigationLinks } from './navbarData';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    renderLinks = () => {
        return (
            <React.Fragment>
                {navigationLinks.map((item, index) => {
                    return (
                        <li className='nav-item'>
                            <Link className='nav-link' to={item.link}>{item.text}</Link>
                        </li>
                    )
                })}
            </React.Fragment>
        )

    }
    render() {
        return (
            <main className='navbar navbar-expand-sm navbar-light'>
                <ul className='navbar-nav'>
                    {this.renderLinks()}
                </ul>
            </main>
        )
    }
}
