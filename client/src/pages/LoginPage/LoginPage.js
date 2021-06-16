import React from 'react';
import './LoginPage.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const LoginPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default LoginPage;