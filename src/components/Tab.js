import React from 'react'
import TabRow from "./TabRow"

const Tab = props => {
    const {tab, tuning} = props

    return (
        <div className='tab'>
            {
                tab.map((tNote, i) => <TabRow note={tNote} tuning={tuning} key={i} />).reverse()
            }
        </div>
    )
}

export default Tab