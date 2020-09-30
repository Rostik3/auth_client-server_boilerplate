import React from 'react'
import GradientWrapper from "../GradientWrapper/GradientWrapper.jsx";
import { Link } from 'react-router-dom';
import './InitialPage.scss'

export default function InitialPage () {
    return (
        <GradientWrapper>
        <div className='welcome-wrapper'>
            <h1>Hey! Hi! Hello!</h1>
            <div className='welcome-ways'>
                <Link to='/login' className='welcome-ways-path'>Log In</Link>
                <Link to='/register' className='welcome-ways-path'>Sign Up</Link>
            </div>
        </div>
        </GradientWrapper>
    )
}