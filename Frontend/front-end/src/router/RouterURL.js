import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory, useLocation} from 'react-router-dom';
import Home from './../component/Home';
import Signup from './../component/Signup';
import Summary from './../component/Summary';
import Read from './../component/Read';
import Login from './../component/Login';


class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/summary" component={Summary}/>
                    <Route exact path="/read" component={Read}/>
                    <Route exact path="/login" component={Login}/>
                    <Route component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default RouterURL;