import React from 'react'

const Input = ({type, value, onChange}) => {
    return (
        <div className='input'>
            <input className='input__field' type={type} value={value} onChange={onChange}/>
        </div>
    )
}

export default Input