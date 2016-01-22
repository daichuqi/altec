import React,{Component} from 'react'
import ProductList from './components/product-list'
import {category,TempCtrlList} from './components/product-data'

const CategoryList = category.map((item)=>{
    return (
      <div key={item.name} >
        {item.name}
      </div>
    )
});

class Products extends Component{
  constructor(props) {
    super(props)
    this.state = {
      products:TempCtrlList
    };
  }

  render() {
    return (
      <div>
        <div className="pd-title">
          <div className="pd-title-text">CULTURE OF PRODUCT<span className="pd-title-span"> EXCELLENCE</span></div>
          <div className="pd-title-text">AND TECHOLOGY<span className="pd-title-span"> INNOVATION</span></div>
        </div>
        <div className="pd-category">
          <ProductList products={this.state.products}/>
        </div>
      </div>
    )
  }
}

export {Products,CategoryList}