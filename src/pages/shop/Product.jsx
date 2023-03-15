import React, { useContext } from 'react'
import { CartContext } from '../../components/context/Context';
export const Product = (props) => {

    const {id, product, price, productName, productImage} = props.data;
  
const Globalstate = useContext(CartContext);
const dispatch = Globalstate.dispatch;
console.log(Globalstate)
  
    return (
    <div className='product'>
        <img src= {productImage}/>
        <div className='description'>
            <p> <b>{productName}</b></p>
            <p>$ {price}</p>
        </div>
        <button className='addToCartBtn' onClick={() => dispatch({type: 'ADD', payload: product})}>Add to Cart</button>
    </div>
  )
};
