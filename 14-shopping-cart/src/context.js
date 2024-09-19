import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
import CartItems from './data'
import reducer from './reducer'

const AppContext = createContext()
const AppProvider = ({children}) => {
  const defaultState ={
    loading: false,
    cart: CartItems,
    total:0,
    amount: 0
  }
    const [state, dispatch] = useReducer(reducer, defaultState)
    const clearCart =()=>{
      dispatch({ type:'CLEAR_CART' })
    }
    const remove =(id)=>{
      dispatch({ type:'REMOVE', payload: id})
    }
    const increase =(id)=>{
      dispatch({ type:'INCREASE', payload: id})
    }
    const decrease =(id)=>{
      dispatch({ type:'DECREASE', payload: id})
    }
  return (
    <AppContext.Provider value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease, 
    }}>{children}</AppContext.Provider>
  )
}
const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export { AppProvider, useGlobalContext }