import React, { useState } from 'react';
import Auth from './../auth/auth';
import {NavLink, useHistory} from 'react-router-dom';
import {LOGIN} from '../mutations/mutations';
import {useMutation, useApolloClient} from '@apollo/react-hooks';
import {onError} from 'apollo-link-error';
const Login = (props) =>  {
    const client = useApolloClient();
    const history = useHistory();
    console.log(client);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errors, setErrors] = useState(false);
    const [errors2, setErrors2] = useState(false);
    const [login, {data,loading,error}] = useMutation(LOGIN, {
        onCompleted({login}) {
            localStorage.setItem("token", login);
            if(login) {
                client.writeData({data: {isLoggedin: true}});
                history.push("/");
            }
        },
        onError(err) {
            err.graphQLErrors.map(x => {
                if(x.message === "Password is wrong") setErrors(true);
                if(x.message === "Account Dont Exist") setErrors2(true);
            })
            //console.log(err);
            //setErrors(true);
            //alert("WRONG PASSWORD");
        }
    });
    const emailChange = (e) => {
        e.preventDefault();
        setErrors(false);
        setErrors2(false);
        setEmail(e.target.value);   
    }
    const passChange = (e) => {
        e.preventDefault();
        setErrors(false);
        setErrors2(false);
        setPass(e.target.value);
    }
    const errorChange = (e) => {
        e.preventDefault();
        setErrors(false);
        setErrors2(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        login({variables: {email: email, password: pass}, });
        localStorage.setItem("email", email);
        localStorage.setItem("password", pass);
    }
    //if(error) console.log(error.message);
    return (
        <div className="main-body">
            <div className="login-frame">
                <div className="lg-top">
                    <h2>LOGIN</h2>
                </div>
                <div className="lg-bottom">
                    <form onSubmit={handleSubmit}>
                        <div className="login-part-frame">
                            <div className="login-part"><h3>Email:</h3></div>
                            <div className="lg-fillin-box">
                                <input className="lg-fillin-txt" type="text" onClick={errorChange} onChange={emailChange}/>
                            </div>
                        </div>
                        <div className="login-part-frame">
                            <div className="login-part"><h3>Password:</h3></div>
                            <div className="lg-fillin-box">
                                <input className="lg-fillin-txt" type="password" onClick={errorChange} onChange={passChange}/>
                            </div>
                        </div>
                        {
                            errors ? <div className="error">WRONG PASSWORD</div> : <p></p>
                        }
                        {
                            errors2 ? <div className="error">ACCOUNT DOES NOT EXIST</div> : <p></p>
                        }
                        <div className="lg-confirm-btn-wrap">
                            <button onClick={handleSubmit} className="lg-confirm-btn">Confirm</button>
                        </div>
                    </form>
                    <div className="register-frame">
                        <NavLink to="/signup" className="register">Don't have an account?</NavLink>
                    </div>      
                </div>
            </div>
        </div>
    );
}

export default Login;