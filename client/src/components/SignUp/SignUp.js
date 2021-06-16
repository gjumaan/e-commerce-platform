import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../Form-Input/Form-Input'
import CustomButton from '../Custom-Button/Custom-Button';
import { signUpStart } from '../../redux/User/User-Actions'
import './SignUp.scss'; 

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userInfo) => dispatch(signUpStart(userInfo))
})

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert(`Passwords don't match`);
            return; 
        }
        signUpStart({ displayName, email, password })
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput name='displayName' type='text' value={displayName} onChange={handleChange} label='Display Name' required/>
                <FormInput name='email' type='email' value={email} label='Email' onChange={handleChange} required />
                <FormInput name='password' type='password' value={password} label='Password' onChange={handleChange} required />
                <FormInput name='confirmPassword' type='password' value={confirmPassword} label='Confirm Password' onChange={handleChange} required />
                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
        </div>
    )

}

export default connect(null, mapDispatchToProps)(SignUp);