import React from 'react';
import ProductListItem from './product-list-item';

const ProductList = (props) => {
  const productItems = props.products.map((product)=>{
    return (
      <ProductListItem key={product.id} product={product} />
    )
  });

  return(
    <ul className="col-md-12">
      {productItems}
    </ul>
  );
};

export default ProductList;