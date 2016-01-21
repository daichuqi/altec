export const styles = {
  link:{
    display: "block",
    padding: "10px 25px",
    position: "relative",
    transition: "color .25s ease",
    transition: "left 0.5s ease, width 0.5s ease"
  },
  activeLink:{
    color: "#28c",
    width: '244px',
    left:'6px'
  }
};

export const navArray = [{
  name:"Home",
  to:"/",
  favicon:"fa fa-home",
  top:"addbordertop",
},{
  name:"Product List",
  to:"/products",
  favicon:"fa fa-cube",
  active:styles.activeLink,
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