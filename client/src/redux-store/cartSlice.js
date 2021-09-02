import {createSlice} from '@reduxjs/toolkit'


// For Cart:
let cartSlice = createSlice({
    name:"product",
    initialState:{
        product:[],
        index:[],
        count:0
    },
    reducers:{
        addCart:(state,action)=>{
            state.index.push(action.payload);
        },
        addProduct:(state,action)=>{
            state.product.push(action.payload);
        },
        incrementCount:(state)=>{
            state.count = state.count+1
        },
        decrementCount:(state)=>{
            state.count=state.count-1
        }
    }
})

export const {addCart,addProduct,incrementCount,decrementCount} =cartSlice.actions;
export default cartSlice.reducer