import React from 'react'
import { useParams } from 'react-router-dom'

const Param = () => {
    const {id, name} = useParams()
  return (
    <div>Param is: {id} and name is : {name}</div>
  )
}

export default Param