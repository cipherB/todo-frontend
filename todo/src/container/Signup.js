import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../redux/alert/alertAction';
import { signup } from '../redux/auth/authAction';

const Signup = ({setAlert, signup, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password1: "",
        password2: ""
    });

    const { username, password1, password2, email } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if (password1 !== password2) {
            setAlert('Passwords do not match', 'error');
        }else{
            signup(username, password1, password2, email)
        }
    };
    if (isAuthenticated){
        return <Redirect to='/dashboard' />
    };

    return (
        <div className='auth' >
            <h1 className='auth_title' >Sign Up</h1>
            <p className='auth_lead' >Create your account</p>
            <form className='auth_form' onSubmit={e => onSubmit(e)} >
            <div className='auth_form_group' >
                    <input 
                        className='auth_form_input' 
                        type='text' 
                        placeholder='Username' 
                        name='username' 
                        value={username} 
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <div className='auth_form_group' >
                    <input 
                        className='auth_form_input' 
                        type='email' 
                        placeholder='Email' 
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
                        name='password1'
                        value={password1}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                </div>
                <div className='auth_form_group' >
                    <input
                        className='auth_form_input'
                        type='password'
                        placeholder='Confirm Password'
                        name='password2'
                        value={password2}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                </div>
                <button className='auth_form_button' >Register</button>
            </form>
            <p className='auth_authtext' >
                Already have an account? <Link className='auth_authtext_link' to='/login'>Sign In</Link>
            </p>
        </div>
    )
};

Signup.propTypes = {
    setAlert: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.token
});

export default connect(mapStateToProps, {setAlert, signup})(Signup);
