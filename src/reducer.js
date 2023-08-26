
const reducer = (state, action) => {
  switch(action.type){
    case "CLEAR_CART":
      return {...state, cart: []}
    case "REMOVE_ITEM":     
      return {...state, cart: state.cart.filter(item=>item.id !== action.payload)}
    case "INCREASE_AMOUNT":
      let tempCartInc = state.cart.map(item=>{
        if(item.id === action.payload){
          return {...item, amount: item.amount+1}
        }
        return item
      })
      return {...state, cart: tempCartInc, amount: state.amount + 1}
    case "DECREASE_AMOUNT":
      let tempCartDec = state.cart.map(item=>{
        if(item.id === action.payload){         
          return {...item, amount: item.amount -1}
        }        
        return item
      }).filter(item=>item.amount >= 1)
      return {...state, cart: tempCartDec, amount: state.amount - 1}
    default:
      return state
  }
  
}

export default reducer;