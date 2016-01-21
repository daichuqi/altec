import React from 'react'
import {Row,Col} from 'react-bootstrap'

const ProductListItem = ({product}) =>{
  const productId = product.id;
  if(!product){
    return <div>Loading...</div>
  }
  return (
    <Row className="show-grid">
      <Col xs={12} md={4}>
        <img src="./images/logo.png" />
      </Col>
      <Col xs={12} md={8}>
        <div>hello</div>
      </Col>
    </Row>
  )
}
export default ProductListItem