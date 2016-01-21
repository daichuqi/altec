import React from 'react'

const category = [{
  name:"Temperature Controllers"
},{
  name:"Tension Controllers"
},{
  name:"Pressure Controllers"
},{
  name:"Humidity Controllers"
},{
  name:"Temp. Differential Controllers"
},{
  name:"PH/ORP Controllers"
}]

const CategoryList = category.map((item)=>{
    return (
      <div key={item.name} >
        {item.name}
      </div>
    )
});

const Products = React.createClass({
  render() {
    return (
      <div>
        <div className="pd-title">
          <div className="pd-title-text">CULTURE OF PRODUCT<span className="pd-title-span"> EXCELLENCE</span></div>
          <div className="pd-title-text">AND TECHOLOGY<span className="pd-title-span"> INNOVATION</span></div>
        </div>
        <div className="pd-category">
        </div>
      </div>
    )
  }
})

export {Products,CategoryList}