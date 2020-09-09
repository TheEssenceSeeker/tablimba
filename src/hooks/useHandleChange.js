import {useState, useCallback} from 'react'

const useHandleChange = (initialState) => {
    const [value, setValue] = useState(initialState)

    const callback = e => {
        const {value, type, checked} = e.target
        type === "checkbox" ? setValue(checked) : setValue(value)
    }
    const handleChange = useCallback(
        callback,
        []
    )
    return [value, handleChange]
}

export default useHandleChange