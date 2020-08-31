import React from 'react'

const TabBar = (props) => {
    const {number, hasError = false} = props
    return (
        <div className={`tab-bar${hasError ? ' bar-error' : ''}`}>
            <div className="bar-number">{number}</div>
            {props.children}
        </div>
    )
}

export default TabBar