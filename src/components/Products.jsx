import React from 'react'
import Product from './Product'

function Products() {

    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ]

  return (
    <div>
      <Product />
    </div>
  )
}

export default Products
