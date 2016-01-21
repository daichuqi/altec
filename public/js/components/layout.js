import React from 'react'
import Frontpage from './frontpage'
import Navbar from './navbar'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="sidecontent">
          {this.props.children || <Frontpage />}
        </div>
      </div>
    )
  }
}


