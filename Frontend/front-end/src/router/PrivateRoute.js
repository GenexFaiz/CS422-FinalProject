import React from 'react';
import Auth from './../auth/auth';
import {BrowserRouter as Route, Redirect} from 'react-router-dom';
const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
          {...rest}
          render={({ location }) =>
            Auth.isAuth ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        > <>{children}</>
        </Route>
      );
}

export default PrivateRoute 