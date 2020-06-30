import React from 'react';
import {Redirect} from 'react-router-dom';
import {useApolloClient} from '@apollo/react-hooks';
const Logout = () => {
    const client = useApolloClient();
    client.writeData({ data: {isLoggedin: false} });
    console.log(client);
    localStorage.clear();
    return <Redirect to="/"/>
}

export default Logout;