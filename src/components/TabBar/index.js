import React from 'react'
import TabBarContainer from "./TabBarContainer"
import BarNumber from "./BarNumber"

const TabBar = (props) => {
    const {number, hasError = false} = props
    return (
        <TabBarContainer hasError={hasError}>
            <BarNumber>{number}</BarNumber>
            {props.children}
        </TabBarContainer>
    )
}

export default TabBar