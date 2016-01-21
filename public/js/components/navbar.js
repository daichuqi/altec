import React from 'react'
import { Link } from 'react-router'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.link = {
  display: "block",
  padding: "10px 20px",
  position: "relative",
  transition: "color .25s ease",
}

styles.activeLink = {
  color: "#28c"
}


class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header-logo">
            <img className="logo" src="images/logo.png"></img>
          </div>
          <div className="sidebar-header-meta">
            <ul className="sidebar-header-meta-list">
            <li><a href="#"><i className="sidebar-header-meta-list-icon fa fa-link"/>Website</a></li>
            <li><a href="#"><i className="sidebar-header-meta-list-icon fa fa-link"/>Github</a></li>
            <li><a href="#"><i className="sidebar-header-meta-list-icon fa fa-link"/>Support</a></li>
            </ul>
          </div>
        </div>

        <div className="sidebar-nav-wrapper js-custom-scrollbar">
          <ul className="sidebar-nav js-one-page-nav js-menu-vertical">
            <li className="addbordertop">
              <Link className="route-link" to="/" style={styles.link}>
                <span className="sidebar-nav-icon"><i className="fa fa-home"></i></span>Home
              </Link>
            </li>
            <li>
              <Link className="route-link" to="/products" style={styles.link} activeStyle={styles.activeLink}>
                <span className="sidebar-nav-icon"><i className="fa fa-cube"></i></span>Products
              </Link>
            </li>
            <li>
              <Link className="route-link" to="/applications" style={styles.link} activeStyle={styles.activeLink}>
                <span className="sidebar-nav-icon"><i className="fa fa-cog"></i></span>Applications
              </Link>
            </li>
            <li>
              <Link className="route-link" to="/download" style={styles.link} activeStyle={styles.activeLink}>
                <span className="sidebar-nav-icon"><i className="fa fa-download"></i></span>Download
              </Link>
            </li>
            <li>
              <Link className="route-link" to="/gallery" style={styles.link} activeStyle={styles.activeLink}>
                <span className="sidebar-nav-icon"><i className="fa fa-picture-o"></i></span>Gallery
              </Link>
            </li>
            <li>
              <Link className="route-link" to="/contact" style={styles.link} activeStyle={styles.activeLink}>
                <span className="sidebar-nav-icon"><i className="fa fa-envelope"></i></span>Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-footer">
          Shenzhen ALTEC Electronics Co., Ltd.
        </div>
      </div>
    )
  }
}

export default Navbar