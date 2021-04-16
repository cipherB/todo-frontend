import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/auth/authAction';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });

    const { username, password, email } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        console.log('username ',email)
        login(username, password, email)
    };
    if (isAuthenticated){
        return <Redirect to="/dashboard" />
    }
    return (
        <div className='auth' >
            <h1 className='auth_title' >Sign In</h1>
            <p className='auth_lead' >Sign into your account</p>
            <form className='auth_form' onSubmit={e => onSubmit(e)} >
                <div className='auth_form_group' >
                    <input 
                        className='auth_form_input' 
                        type='name' 
                        placeholder='username' 
                        name='username' 
                        value={username} 
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <div className='auth_form_group' >
                    <input 
                        className='auth_form_input' 
                        type='Email' 
                        placeholder='email' 
                        name='email' 
                        value={email} 
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <div className='auth_form_group' >
                    <input
                        className='auth_form_input'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                </div>
                <p>{password} </p>
                <button className='auth_form_button' >Login</button>
            </form>
            <p className='auth_authtext' >
                Don't have an account? <Link className='auth_authtext_link' to='/signup'>Sign Up</Link>
            </p>
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.token
});

export default connect(mapStateToProps, { login })(Login);
