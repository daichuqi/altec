import React from 'react'
import Frontpage from './frontpage'
import Navbar from './navbar'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ padding: 20 }}>
          {this.props.children || <Frontpage />}
        </div>
      </div>
    )
  }
}


