import React from 'react'
import Router from '../../Routers'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/detail'>Detail</Link>
        </li>
      </ul>
    </Router>
  )
}