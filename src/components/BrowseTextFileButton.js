import React from 'react'
import styled from "styled-components"
import Button from "./Button"

const BrowseTextFileButtonContainer = styled(Button)`
  input[type='file'] {
    display: none;
  }
  label {
    cursor:pointer;
  }
`

const BrowseTextFileButton = ({handleFile, children, extension = 'tbl', title}) => {
    const handleChange = e => {
        let reader = new FileReader()
        reader.readAsText(e.target.files[0])
        reader.onload = () => {
            handleFile(reader.result)
        }
        e.target.value = null
    }
    return (
        <BrowseTextFileButtonContainer title={title}>
            <label>
                <input type={'file'} accept={`.${extension}`} onChange={handleChange} />
                {children}
            </label>
        </BrowseTextFileButtonContainer>
        )
}

export default BrowseTextFileButton