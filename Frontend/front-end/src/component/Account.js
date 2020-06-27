import React, { Component } from 'react';

const Account = () => {
    return (
        <div className="main-body">
            <div className="login-frame">
                <div className="lg-top">
                    <h2>YOUR ACCOUNT</h2>
                </div>
                <div className="lg-bottom">
                    <div className="login-part-frame">
                        <div className="login-part"><h3>Email:</h3></div>
                    </div>
                    <div className="login-part-frame">
                        <div className="login-part"><h3>Password:</h3></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;