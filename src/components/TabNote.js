import React from 'react'

const TabNote = ({filled = false}) => <div className={`tabkey${filled ? ' filled' : ''}`} />

export default TabNote