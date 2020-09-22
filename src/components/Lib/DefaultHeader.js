import React from 'react'
import {useParams} from 'react-router-dom'

const DefaultHeader = () => {
  const {pageName} = useParams()

  return (
    <h1>{pageName.toUpperCase()}</h1>
  )
}

export default DefaultHeader
