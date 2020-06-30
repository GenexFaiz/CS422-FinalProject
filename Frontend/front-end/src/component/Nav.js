import React from 'react';
import {NavLink} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const Nav = () => {
    const IS_LOGGED_IN = gql`
        query IsUserLoggedIn{
        isLoggedin @client
    }
    `;

    function IsLoggedIn() {
    const {data} = useQuery(IS_LOGGED_IN);
    return data.isLoggedin ? <li><NavLink exact className="logout" to="/logout">LOG OUT</NavLink></li>
                           : <li><NavLink exact className="current" activeClassName="current-a-home" to="/login">LOG IN</NavLink></li>
    }
    function User() {
        const {data} = useQuery(IS_LOGGED_IN);
        return data.isLoggedin ? <li className="icon">
                                    <NavLink exact className="current" activeClassName="currentuser" to="/"><i class="fa fa-user" aria-hidden="true"></i></NavLink>
                                    <span>
                                        {`${localStorage.getItem("email")}`}
                                    </span>
                                </li>
                               : <p></p>
    }
    let history = useHistory();
    const searchHandle = (url) => {
        history.push(url);
    }
    let search;
    return (
        <div className="header">
            <ul className="menu-bar">
                <li><NavLink exact className="current" activeClassName="current-a-home" to="/">HOME</NavLink></li>
                <IsLoggedIn/>   
                <User/>                 
            </ul>
            <div className="search-box">
                <input className="search-txt" type="text" placeholder="Type to search..." onKeyPress= {
                    e => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            search = e.target.value;
                            searchHandle(`/search?query=${search}`)
                        }
                    }
                }/>
                <div className="search-btn" >
                    <i className="fa fa-search" aria-hidden="true"/>
                </div>
            </div>
        </div>
    );
}

export default Nav;