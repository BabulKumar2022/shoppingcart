import React, { useContext } from 'react'
import { CartContext } from '../../components/context/Context'
import './Cart.css'


export const Cart = () => {

  const Globalstate =useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const total = state.reduce((total, item)=>{
      return total + item.price * item.quantity;
  }, 0);
  return (
    <div className='cart'>
      {state.map((item, index) =>{
        return(
          <div className='card' key={index}>
            <img src={item.image} alt=""/>
            <p>Name: {item.title}</p>
            <p>Sub Total: {item.quantity * item.price}</p>
            <div className='quantity'>
              <button onClick={() => dispatch({type: "INCREASE", payload: item})}>+</button>
              <p>{item.quantity}</p>
              <button onClick={() =>
              {
                if (item.quantity > 1){
                  dispatch({type: "DECREASE", payload: item});
                }else{
                  dispatch({type: "REMOVE", payload: item});
                }
              }
                 }>-</button>
            </div>
            <button className='delete' onClick={() => dispatch({type: "REMOVE", payload: item})}>X</button>
          </div>
        )
      })}
      {state.length > 0 && <div className='total'><h2>Total: {total}</h2></div>}
      </div>
  )
}
