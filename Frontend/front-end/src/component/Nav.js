import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                 <div className="header">
                    <ul className="menu-bar">
                        <li><NavLink exact className="current" activeClassName="current-a-home" to="/">HOME</NavLink></li>
                        <li><NavLink exact className="current" activeClassName="current-a" to="/login">LOG IN</NavLink></li>
                        <li><NavLink exact className="current" activeClassName="current-a" to="/signup">SIGN UP</NavLink></li>
                    </ul>
                    <div className="search-box">
                        <input className="search-txt" type="text" placeholder="Type to search..." />
                        <a className="search-btn" href="#">
                            <i className="fa fa-search" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;