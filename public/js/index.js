import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, browserHistory } from 'react-router'
import Layout from './components/layout'
import Contact from './components/contact/contact'
import Products from './components/products/products'
import Gallery from './components/gallery/gallery'
import Download from './components/download/download'
import Applications from './components/applications/applications'

const mountNode = document.querySelector('.container')

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="products" component={Products} />
      <Route path="applications" component={Applications} />
      <Route path="download" component={Download} />
      <Route path="gallery" component={Gallery} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
), mountNode)