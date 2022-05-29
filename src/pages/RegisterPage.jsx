import SignUp from 'components/SignUp';
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div style={{textAlign: 'center',marginTop: 150}}>
            <h2 style={{marginBottom: 20}}>Register</h2>
        <SignUp />
            <p>
                Already have an account? <Link to='/login'>Sign in</Link>
            </p>
        </div>
    );
}

export default RegisterPage;
