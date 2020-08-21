import React from 'react'

const TabNote = ({filled = false}) =>
    (
        <div className={'tabkey'} >
            {
                filled && <div className={'tabkey filled'}></div>
            }
        </div>
    )

export default TabNote