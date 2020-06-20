import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <div className="main-body">
                    <div className="signup-frame">
                        <div className="sb-top">
                            <h2>CREATE AN ACCOUNT</h2>
                        </div>
                        <div className="sb-bottom">
                            <div className="signup-part-frame">
                                <div className="signup-part"><h3>Username:</h3></div>
                                <div className="fillin-box">
                                    <input className="fillin-txt" type="text" />
                                </div>
                            </div>
                            <div className="signup-part-frame">
                                <div className="signup-part"><h3>Password:</h3></div>
                                <div className="fillin-box">
                                    <input className="fillin-txt" type="password" />
                                </div>
                            </div>
                            <div className="signup-part-frame">
                                <div className="signup-part"><h3>Re-enter password:</h3></div>
                                <div className="fillin-box">
                                    <input className="fillin-txt" type="password" />
                                </div>
                            </div>
                            <div className="signup-part-frame">
                                <div className="signup-part"><h3>Email:</h3></div>
                                <div className="fillin-box">
                                    <input className="fillin-txt" type="text" />
                                </div>
                            </div>
                            <div className="confirm-btn-wrap">
                                <input className="confirm-btn" type="submit" defaultValue="Confirm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;