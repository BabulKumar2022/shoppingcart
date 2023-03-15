import React, { useContext } from 'react'
import { CartContext } from '../../components/context/Context';
export const Product = (props) => {

    const {id, item, price, productName, productImage} = props.data;
  
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
        <span><button onClick={() => dispatch({type: 'ADD', payload: item})}>add to cart</button></span> 
    </div>
  )
};
