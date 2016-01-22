import React from 'react'
import {Row,Col} from 'react-bootstrap'

const ProductListItem = ({product}) =>{
  const productId = product.id;
  if(!product){
    return <div>Loading...</div>
  }
  return (
    <Row className="pd-list-item">
      <Col xs={4}>
        <img className="pd-list-img" src={product.img} />
      </Col>
      <Col xs={8}>
        <div className="pd-list-name">{product.name}</div>
      </Col>
    </Row>
  )
}
export default ProductListItem