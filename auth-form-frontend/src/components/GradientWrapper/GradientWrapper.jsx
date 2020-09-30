import React from 'react'
import './GradientWrapper.scss'

export default function GradientWrapper ({ children }) {

    return (
        <div className='bg-form'>
            { children }
        </div>
    )
}