import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import GradientWrapper from "../GradientWrapper/GradientWrapper.jsx";
import './ProfilePage.scss'

export default function ProfilePage () {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        setFirstName(decoded.first_name)
        setLastName(decoded.last_name)
    });

    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        history.push('/')
    }

    return (
        <GradientWrapper>
            <div className='profile-wrapper'>
                <h1>Hey it's you</h1>
                <i className="fas fa-user" />
                <div className='user-data'>
                    <p>First Name: {first_name}</p>
                    <p>Last Name: {last_name}</p>
                </div>
                <a href="/" onClick={logOut}>
                    <span>Exit </span>
                    <i className="fas fa-sign-out-alt" />
                </a>
            </div>
        </GradientWrapper>
    )
}