import React from 'react'
import Home from '../containers/Home'
import Detail from '../containers/Detail'
import About from '../containers/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

export default function RouterConfig () {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
