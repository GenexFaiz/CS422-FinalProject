import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './../component/Home';
import ViewMore from './../component/ViewMore';
import Signup from './../component/Signup';
import Summary from './../component/Summary';
import Read from './../component/Read';
import Login from './../component/Login';
import Search from './../component/Search'
import Logout from './../component/Logout';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';


//const {data} = useQuery(IS_LOGGED_IN);
//if (data.isLoggedin) 
                  
const RouterURL = () => {
  const IS_LOGGED_IN = gql`
    query IsUserLoggedIn{
      isLoggedin @client
    }
  `;
const {data} = useQuery(IS_LOGGED_IN);
  return (
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/">{
            data.isLoggedin ? <Redirect to="/"/> : <Redirect to="/login"/>
          }
          </Route>
          <Route excat path="/logout" component={Logout}/>
          <Route exact path="/viewmore/page=:page_id"component={ViewMore}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/summary/id=:id" component={Summary}/>
          <Route exact path="/read/chapter:num/id=:chapter_id" component={Read}/>
          <Route exact path="/login"><Login/></Route>
          <Route path={{pathname: "/search", search: "query=:text"}} component={Search}/>
          <Route component={Home}/>
      </Switch>
  );
}

export default RouterURL;