import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './Product'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'><h1>Nike Shoes</h1></div>
        <div className='product'>
            {PRODUCTS.map((product) =>(
                <Product data={product}/>
            ) )}
        </div>
   </div>
  )
}
