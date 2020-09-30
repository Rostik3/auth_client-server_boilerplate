import React from 'react'
import GradientWrapper from "../GradientWrapper/GradientWrapper.jsx";
import { useInput } from "../../hooks/InputHook";
import { login, register } from "../../helpers/user.helper";
import { useHistory } from "react-router-dom";
import './Form.scss'

export default function Form ({ isSignUp }) {

    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('')
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
    const history = useHistory();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        }

        register(user).then(res => {
            if (!res.data.error) {
                history.push('/login')
            } else {
                alert('User already exists')
            }
        })

        resetFirstName();
        resetLastName();
        resetEmail();
        resetPassword();
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        }

        login(user).then(res => {
            if (res) {
                history.push('/profile')
            }
        })

        resetEmail();
        resetPassword();
    }

    return (
        <GradientWrapper>
            <div className='form-wrapper'>
                <div className='decorative-block'>
                    <i className='round' />
                    <i className='round' />
                    <i className='round' />
                    {isSignUp ?
                        <form className='auth-form' onSubmit={handleRegisterSubmit}>
                            <div className='auth-form-wrap'>
                                <h2 className='auth-form-header'>Sign Up</h2>
                                <input
                                    className='auth-form-wrap-input'
                                    name='first-name'
                                    placeholder='First Name'
                                    type='text'
                                    {...bindFirstName}
                                />
                                <input
                                    className='auth-form-wrap-input'
                                    name='last-name'
                                    placeholder='Last Name'
                                    type='text'
                                    {...bindLastName}
                                />
                                <input
                                    className='auth-form-wrap-input'
                                    name='email'
                                    placeholder='Email'
                                    type='email'
                                    {...bindEmail}
                                />
                                <input
                                    className='auth-form-wrap-input'
                                    name='password'
                                    placeholder='Password'
                                    type='password'
                                    {...bindPassword}
                                />
                                <button className='auth-form-wrap-button' type='submit'>Sign Up</button>
                            </div>
                        </form>
                            :
                        <form className='auth-form' onSubmit={handleLoginSubmit}>
                            <div className='auth-form-wrap'>
                                <h2 className='auth-form-header'>Log In</h2>
                                <input
                                    className='auth-form-wrap-input'
                                    name='login-email'
                                    placeholder='Email'
                                    type='text'
                                    {...bindEmail}
                                />
                                <input
                                    className='auth-form-wrap-input'
                                    name='login-password'
                                    placeholder='Password'
                                    type='password'
                                    {...bindPassword}
                                />
                                <button className='auth-form-wrap-button' type='submit'>Log In</button>
                            </div>
                        </form>
                    }

                </div>
            </div>
        </GradientWrapper>
    )
}