import React from 'react';
const Auth = {
    isAuth: false,
    authenticate(cb) {
        this.isAuth = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isAuth = false;
        setTimeout(cb, 100);
    }
};
export default Auth;