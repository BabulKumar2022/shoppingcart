import { createContext, useReducer } from "react";


export const CartContext = createContext();

export const Context = (props) =>{
    const reducer = (state, action) =>{
        switch(action.type){
            case "ADD" :
                const tempState = state.filter((item)=> action.payload.id === item.id)
                if(tempState.length > 0 ) {
                        return state
                }else{
                    return [...state, action.payload];
                }
                //---------------INCREASE--------------//
               case 'INCREASE':
               const tempstate1 = state.map((item) =>{

                if(item.id === action.payload.id){
                  return  {...item, quantity: item.quantity + 1}
                }else{
                    return item;
                }
               });
               return tempstate1;
               //-----------DECREASE------------//
               case 'DECREASE':
               const tempstate2 = state.map((item) =>{

                if(item.id === action.payload.id){
                  return  {...item, quantity: item.quantity - 1}
                }else{
                    return item;
                }
               });
               return tempstate2;
               //-----------------DELETE------------------//
               case 'REMOVE':
                const tempstate3 = state.filter((item) =>item.id !== action.payload.id);
                  
                return tempstate3;

            default: 
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, [])
    const info = {state, dispatch};
    return(
        <CartContext.Provider value={info}> {props.children}</CartContext.Provider>
    )
}