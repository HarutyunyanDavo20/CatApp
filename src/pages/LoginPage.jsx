
import Login from 'components/Login';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div style={{textAlign: 'center', marginTop: 150}}>
            <h2 style={{marginBottom: 20}}>Login</h2>
        <Login />
            <p>
                Or <Link to='/register'>register</Link>
            </p>
            
        </div>
    );
}

export default LoginPage;
