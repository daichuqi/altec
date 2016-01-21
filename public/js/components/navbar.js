import React from 'react'
import { Link } from 'react-router'
import {CategoryList} from './products/products'

const styles = {};
styles.link = {
  display: "block",
  padding: "10px 25px",
  position: "relative",
  transition: "color .25s ease",
  transition: "left 0.5s ease, width 0.5s ease",
}
styles.activeLink = {
  color: "#28c",
  width: '244px',
  left:'6px'
}


var listChecker = false;
var openList = function(){
  console.log('list click');
  console.log(listChecker);
  if(listChecker){
    listChecker = false
  }else{
    listChecker = true
  }
}

var navArray = [{
  name:"Home",
  to:"/",
  favicon:"fa fa-home",
  top:"addbordertop",
},{
  name:"Product List",
  to:"/products",
  favicon:"fa fa-cube",
  active:styles.activeLink,
  onclick:openList,
  open:false
},{
  name:"Applications",
  to:"/applications",
  favicon:"fa fa-cog",
  active:styles.activeLink
},{
  name:"Manual Download",
  to:"/download",
  favicon:"fa fa-download",
  active:styles.activeLink
},{
  name:"Gallery",
  to:"/gallery",
  favicon:"fa fa-picture-o",
  active:styles.activeLink
},{
  name:"Contact Us",
  to:"/contact",
  favicon:"fa fa-envelope",
  active:styles.activeLink
}];



class ProductNav extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <li key="Product List" onClick={openList}>
        <Link className="route-link" to="/products" style={styles.link} activeStyle={styles.activeLink}>
          <span className="sidebar-nav-icon"><i className="fa fa-cube"></i></span>Product List
        </Link>
        <div className={listChecker ? "openList NavPdList" : "closeList NavPdList"}>
          {CategoryList}
        </div>
      </li>
    )
  }
}

const navList = navArray.map((navItem)=>{
  if(navItem.name === "Product List"){
    return <ProductNav />
  }else{
    return (
    <li key={navItem.name}>
      <Link className="route-link" to={navItem.to} style={styles.link} activeStyle={navItem.active}>
        <span className="sidebar-nav-icon"><i className={navItem.favicon}></i></span>{navItem.name}
      </Link>
    </li>
  )}
});

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
            <li><a href="#"><i className="sidebar-header-meta-list-icon fa fa-link"/>English</a></li>
            <li><a href="#"><i className="sidebar-header-meta-list-icon fa fa-link"/>中文</a></li>
            <li><a href="#"><i className="sidebar-header-meta-list-icon fa fa-link"/>Support</a></li>
            </ul>
          </div>
        </div>
        <div className="sidebar-nav-wrapper js-custom-scrollbar">
          <ul className="sidebar-nav js-one-page-nav js-menu-vertical" id="navBar">
            {navList}
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