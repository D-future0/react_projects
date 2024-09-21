
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
    }).filter(item => item.amount !== 0)
    return {...state, cart: amountTemp}
  }
  if(action.type === 'GET_TOTAL'){
    let {total, amount} = state.cart.reduce((cartTotal, items)=>{
      const {price, amount} = items
      const tempTotal = price * amount
      cartTotal.total += tempTotal
      cartTotal.amount += amount
      return cartTotal
    },{total:0, amount:0})
    total = parseFloat((total).toFixed(2))
    return {...state, total, amount}
  }
  if(action.type === 'LOADING'){
    return {...state, loading:true}
  }
  if(action.type === 'DISPLAY_CART'){
    return{...state, cart: action.payload, loading: false}
  }
  throw new Error('action type does not match')
}

export default reducer