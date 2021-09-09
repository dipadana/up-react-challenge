import React from 'react'
import { useParams } from 'react-router-dom'

export default function About () {

  const params = useParams()
  console.log(params)

  return (
    <div>
      <h1>About Page</h1>
      <p>This params: {params.name}</p>
    </div>
  )
}