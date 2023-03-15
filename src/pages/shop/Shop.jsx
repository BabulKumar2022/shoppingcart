import axios from 'axios';
import { PRODUCTS } from '../../products';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../components/context/Context';

import './Shop.css';
//https://fakestoreapi.com/products
export const Shop = () => {

// const [data, setData]= useState([]);
// const fetchData = async () =>{
// const response = await axios.get("https://fakestoreapi.com/products");
// setData(response.data);
// console.log(data)
// } ;
// useEffect(()=>{
//   fetchData();
// }, []);

const Globalstate = useContext(CartContext);
const dispatch = Globalstate.dispatch;
console.log(Globalstate)

  return (
    <div className="home">
      {
        PRODUCTS.map((item, index) =>{
          item.quantity = 1;
          return(
            <div className='card' key={index}>
              <img src={item.productImage} alt=""/>
              <p>{item.productName}</p>
              <h3>$: {item.price}</h3>
             <span><button onClick={() => dispatch({type: 'ADD', payload: item})}>add to cart</button></span> 
            </div>
          
          )
        })
      }
   </div>
  )
}
