import React from 'react'
import Button from "./Button"
import styled from 'styled-components'

const ButtonA = styled(Button)`
  text-decoration: none;
  color: #000;
  //font-size: 15px;
  padding: 0 5px;
`

const SaveTextFileButton = ({fileName, extension, children, dataToSave, title}) => {
    const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToSave))
    return <ButtonA as='a' title={title} className='button' href={`data: ${data}`} download={`${fileName}.${extension}`}>{children}</ButtonA>
}

export default SaveTextFileButton