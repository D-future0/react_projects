
const reducer = (state, action) => {
  if(action.type=== 'CLEAR_CART'){
    return {...state, cart: []}
  }
  if(action.type=== 'REMOVE'){
    return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
  }
  if(action.type=== 'INCREASE'){
    const amountTemp = state.cart.map((item)=>{
        if(item.id === action.payload){
            return{...item, amount: item.amount + 1}
        }
        return item
    })
    return {...state, cart: amountTemp}
  }
  if(action.type === 'DECREASE'){
    const amountTemp = state.cart.map((item)=>{
        if(item.id === action.payload){
            return{...item, amount: item.amount - 1}
        }
        return item
    })
    return {...state, cart: amountTemp}
  }
}

export default reducer