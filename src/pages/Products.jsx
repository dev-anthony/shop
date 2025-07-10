import React from 'react'
import ProductCard from '../components/ProductCard'
function Products() {
  return (
    <div className="">
          <div className="mb-6 text-center w-full bg-gray-100 py-10">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <p className="mt-2">Home / Featured Products</p>
      </div>
      <ProductCard />
    </div>
  )
}

export default Products