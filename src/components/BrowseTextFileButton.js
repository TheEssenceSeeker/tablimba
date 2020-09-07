import React from 'react'

const BrowseTextFileButton = ({handleFile, children, extension = 'tbl'}) => {
    const handleChange = e => {
        let reader = new FileReader()
        reader.readAsText(e.target.files[0])
        reader.onload = () => {
            handleFile(reader.result)
        }
        e.target.value = null
    }
    return (
        <div className="button open-file">
            <label>
                <input type={'file'} accept={`.${extension}`} onChange={handleChange} />
                {children}
            </label>
        </div>
        )
}

export default BrowseTextFileButton