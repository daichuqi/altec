import React from 'react'
import {test} from './product-data'

const ProductListItem = ({product}) =>{
  const productId = product.id;
  if(!product){
    return <div>Loading...</div>
  }
  return (
    <div className="col-md-12">
      {product.name}{test.name}
    </div>
  )
}
export default ProductListItem