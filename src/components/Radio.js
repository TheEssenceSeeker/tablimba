import React from 'react'

const Radio = ({name, value, text, checked, onChange}) => {
    return (
        <div className="radio">
            <label>
                <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
                <div className='radio__btn'>{text}</div>
            </label>
        </div>
    )
}

export default Radio