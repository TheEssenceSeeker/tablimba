import React from 'react'

const Checkbox = ({text, isChecked, onChange}) => {
    return (
        <div className="checkbox">
            <label>
                <input type="checkbox" checked={isChecked} onChange={onChange} />
                <div className='checkbox__btn'>{text}</div>
            </label>
        </div>
    )
}

export default Checkbox