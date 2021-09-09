import React from 'react'
import Home from './containers/Home/index'
import Detail from './containers/Detail'
import { Provider } from 'react-redux'
import store from './store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

export default function App () {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/detail/:id">
              <Detail/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

