import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Hello from 'components/Hello'

const Root = ({ children }) => {
  return (<div id = 'root'> { children } </div>)
}

const Routes = (
  <Router history = { hashHistory }>
    <Route path='/' component = { Hello } />
  </Router>
)

export default Routes
