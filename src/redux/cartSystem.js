import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  quantity: 0,
  grandTotal: 0
}

const cartSystem = createSlice({
  name: 'user',
  initialState,
  reducers: {
    Addcart: (state, action) => {
      let data =  action.payload
      data.qty = 1
      data.total = data.price * data.qty
      const temp =[...state.cart , data];
      state.grandTotal += data.total; 
      state.cart = temp
    },
    // increment:(state,action) =>{

    //   // qty incremnet
    //     let temp = state.cart;
    //     temp[action.payload].qty += 1 ;
    //     temp[action.payload].total =  temp[action.payload].price *  temp[action.payload].qty < 10;
    //     state.cart = temp

    // },
    increment: (state, action) => {
      
      let temp = state.cart;
      let data = temp[action.payload].qty;
      if (data < 10) {
          temp[action.payload].qty += 1;
          temp[action.payload].total = temp[action.payload].price * temp[action.payload].qty;
          state.grandTotal += temp[action.payload].price; 
      }
      state.cart = temp;
  },




  decrement: (state, action) => {
   
    let temp = state.cart;
    let data = temp[action.payload].qty;
    if (data > 1) {
        temp[action.payload].qty -= 1;
        temp[action.payload].total = temp[action.payload].price * temp[action.payload].qty;
        state.grandTotal -= temp[action.payload].price; 
    }
    state.cart = temp;
},

clear: (state) => {
  state.cart = [];
  state.grandTotal = 0;
},

deletei: (state, action) => {
  let temp = state.cart;
  const itemToDelete = temp[action.payload];
  state.grandTotal -= itemToDelete.total;
  state.cart = temp.filter((__,index) => index !== action.payload);
}
      // decrement: (state,action) => {
      //   let temp = state.cart;
      //   temp[action.payload].qty -= 1;
      //   temp[action.payload].total =  temp[action.payload].price *  temp[action.payload].qty ;
      //   if (temp[action.payload].qty ) {
          
      //     state.qty -= 1
      //   }
       
      // },
    
    
  }
})

// Action creators are generated for each case reducer function
export const { Addcart , increment,decrement,clear,deletei} = cartSystem.actions

export default cartSystem.reducer