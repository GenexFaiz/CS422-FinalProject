import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                 <div className="main-body">
                    <div className="login-frame">
                        <div className="lg-top">
                            <h2>LOGIN</h2>
                        </div>
                        <div className="lg-bottom">
                            <div className="login-part-frame">
                                <div className="login-part"><h3>Username:</h3></div>
                                <div className="lg-fillin-box">
                                    <input className="lg-fillin-txt" type="text"/>
                                </div>
                            </div>
                            <div className="login-part-frame">
                                <div className="login-part"><h3>Password:</h3></div>
                                <div className="lg-fillin-box">
                                    <input className="lg-fillin-txt" type="password"/>
                                </div>
                            </div>
                            <div className="lg-confirm-btn-wrap">
              <input className="lg-confirm-btn" type="submit" defaultValue="Confirm" />
            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;