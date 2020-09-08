import React from 'react'

const Button = ({children, onClick}) => {
    return (
        <div className='button' onClick={onClick}>
            <span className='button__text'>{children}</span>
        </div>
    )
}

export default Button