import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, browserHistory } from 'react-router'
import App from './components/App'
import Contact from './components/contact/contact'
import Products from './components/products/products'

const mountNode = document.querySelector('.container')

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="products" component={Products} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
), mountNode)