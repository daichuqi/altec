import React from 'react'

const ProductListItem = ({product}) =>{
  const productId = product.id;
  if(!product){
    return <div>Loading...</div>
  }
  return (
    <div className="col-md-3">
    {product.name}
    </div>
  )
}
export default ProductListItem