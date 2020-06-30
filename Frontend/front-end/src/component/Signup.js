import React, { useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {REGISTER} from '../mutations/mutations';
import {useMutation} from '@apollo/react-hooks';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errors, setErrors] = useState(false);
    const history = useHistory();
    const [register] = useMutation(REGISTER, {
        onCompleted({signup}) {
            if(signup) alert("Congratulation! You have create an new account");
            history.push("/login");
        },
        onError(err) {
            err.graphQLErrors.map(x => {
                if(x.message === "Account Already Exist") setErrors(true);
            })
            console.log(err);
        }
    });
    const emailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);   
        setErrors(false);
    }
    const passChange = (e) => {
        e.preventDefault();
        setPass(e.target.value);
        setErrors(false);
    }
    const errorChange = (e) => {
        e.preventDefault();
        setErrors(false);
    }
    const handleSubmit = (e) => {
        register({variables: {email: email, password: pass}, });
        e.preventDefault();
    }
   
    return (
        <div className="main-body">
            <div className="signup-frame">
                <div className="sb-top">
                    <h2>CREATE AN ACCOUNT</h2>
                </div>
                <div className="sb-bottom">
                    <form onSubmit={handleSubmit}>
                        <div className="signup-part-frame">
                            <div className="signup-part"><h3>Email:</h3></div>
                            <div className="fillin-box">
                                <input className="fillin-txt" type="text" onChange={emailChange}/>
                            </div>
                        </div>
                        <div className="signup-part-frame">
                            <div className="signup-part"><h3>Password:</h3></div>
                            <div className="fillin-box">
                                <input className="fillin-txt" type="password" onChange={passChange}/>
                            </div>
                        </div>
                        {
                            errors ? <div className="error">ACCOUNT HAS ALREADY EXISTED</div> : <p></p>
                        }
                        <div className="confirm-btn-wrap" >
                            <button onClick={handleSubmit} className="confirm-btn">Confirm</button>  
                        </div>
                    </form>
                    <div className="login-wrap">
                        <NavLink to="/login" exact className="login">Already have an account?</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;