import React from 'react'
import { Link } from 'react-router'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark,
  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  padding: 11,
  fontWeight: 200,
  background: light,
  color: dark
}


class Navbar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.wrapper}>
      <div>LINK!!!</div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link} activeStyle={styles.activeLink}>Product</Link>
        <Link to="/contact" style={styles.link} activeStyle={styles.activeLink}>Contact</Link>
      </div>
    )
  }
}

export default Navbar