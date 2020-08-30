import {useState, useCallback, useRef} from 'react'

const useHandleChange = (initialState) => {
    const [value, _setValue] = useState(initialState)

    const ref = useRef(value)

    const setValue = data => {
        ref.current = data
        _setValue(data)
    }

    const cb = e => {
        const {name, value, type, checked} = e.target
        type === "checkbox" ? setValue(checked) : setValue(value)
    }
    const handleChange = useCallback(
        cb,
        []
    )
    return [value, handleChange, ref]
}

export default useHandleChange