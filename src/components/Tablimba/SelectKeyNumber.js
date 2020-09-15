import React from 'react'

const SelectKeyNumber = ({value, onChange}) => {
    const renderOptions = () => {
        let options = []
        for(let i = 3; i <= 17; i++) {
            options.push(<option value={i}>{i}</option>)
        }
        return options
    }
    return (
        <select value={value} onChange={onChange}>
            {
                renderOptions()
            }
        </select>
    )
}

export default SelectKeyNumber
