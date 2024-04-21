import React from 'react'
import { useParams } from 'react-router-dom'

function Demofile() {

  const {id}=useParams
  return (
    <div>hellooooooooooooooo : {id}</div>
  )
}

export default Demofile