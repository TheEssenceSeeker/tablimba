import React from 'react'

const SaveTextFileButton = ({fileName, extension, children, dataToSave}) => {
    const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToSave))
    return <a className='button' href={`data: ${data}`} download={`${fileName}.${extension}`}>{children}</a>
}

export default SaveTextFileButton