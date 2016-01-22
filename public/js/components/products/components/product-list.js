import React from 'react';
import ProductListItem from './product-list-item';
import {Grid} from 'react-bootstrap'


const ProductList = (props) => {
  const productItems = props.products.map((product)=>{
    return (
      <ProductListItem key={product.name} product={product} />
    )
  });

  return(
    <div>
      {productItems}
    </div>
  );
};

export default ProductList;