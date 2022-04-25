import React, { createContext, useEffect, useReducer } from "react";

import Header from '../Layout/Header/Header';
import CartContent from "./CartContext";
import { productList } from "../../ProductList";
import { reducer } from "./reducer";



export const CartContext = createContext();

const initialState = {
    items: productList,
    totalItems: 0,
    totalAmount: 0,
};

const Cart = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) => {
        return dispatch({
            type: 'REMOVE_ITEM',
            payload: id,
        });
    };

    const increaseItem = (id) => {
        return dispatch({
            type: 'INCREASE_ITEM',
            payload: id,
        });
    };

    const decreaseItem = (id) => {
        return dispatch({
            type: 'DECREASE_ITEM',
            payload: id,
        });
    };

    useEffect(() => {
        dispatch({
            type: 'GET_TOTAL'
        });
    },[state.items]);

  return (
    <CartContext.Provider value={{...state, removeItem, increaseItem, decreaseItem}}>
        <Header />  
        <CartContent />
    </CartContext.Provider>
  );
      
};

export default Cart;
