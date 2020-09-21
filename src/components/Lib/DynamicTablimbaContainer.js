import React, {useContext} from 'react'
import {TuningContext} from "../../contexts/tuningContext"
import Container from "./Container";

const DynamicTablimbaContainer = (props) => {
    const {tuning} = useContext(TuningContext)

    return (
        <Container tuning={tuning} {...props}>
            {props.children}
        </Container>
    )
}

export default DynamicTablimbaContainer
