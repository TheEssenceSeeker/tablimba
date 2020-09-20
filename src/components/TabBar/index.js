import React from 'react'
import TabBarContainer from "./TabBarContainer"
import BarNumber from "./BarNumber"

const TabBar = (props) => {
    const {number, hasError = false, children, className} = props
    return (
        <TabBarContainer hasError={hasError} className={className}>
            <BarNumber>{number}</BarNumber>
            {children}
        </TabBarContainer>
    )
}

export default TabBar