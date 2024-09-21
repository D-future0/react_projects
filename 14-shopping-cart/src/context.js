import React, { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import CartItems from "./data";
import reducer from "./reducer";
const url = `https://www.course-api.com/react-useReducer-cart-project`

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const defaultState = {
    loading: false,
    cart: CartItems,
    total: 0,
    amount: 0,
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const fetchData = async()=>{
    dispatch({type:'LOADING'})
    const resp = await fetch(url)
    const cart = await resp.json()
    dispatch({type:'DISPLAY_CART', payload:cart})
  }
  useEffect(()=>{
    fetchData()
  }, [])
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
