import React from 'react'
import './Products.css';

const Products = ({ product }) => {
  return (
    <div className='product-ctr'>
        <div>
            <img width={"80px"} src={product.thumbnail} alt={`product-${product.title}`} />
        </div>
        <h3><b>{product.id}</b>.{product.title}</h3>
        <p>Rs.{product.price}-discount of {product.discountPercentage}</p>
        <p>{product.description}</p>
    </div>
  )
}

export default Products