import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0},
        reducers:{
            increment:state =>{
                state.value++;},
            decrement:state =>{
                state.value--;},
            incrementBymount:(state,action)=>{
state.value+=action.payload;
            },

        }
});
export const {increment,decrement,incrementBymount} = counterSlice.actions;
export default counterSlice.reducer;