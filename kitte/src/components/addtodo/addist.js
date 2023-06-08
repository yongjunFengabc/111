import { createSlice } from "@reduxjs/toolkit";
export const listSlice = createSlice({
    name:'list',
    initialState:{
        value:[]},
        reducers:{
            increment:(state,e) =>{
                state.value.push(e);},
            decrement:state =>{
                state.value--;},
            incrementBymount:(state,action)=>{
state.value+=action.payload;
            },

        }
});
export const {increment,decrement,incrementBymount} = listSlice.actions;
export default listSlice.reducer;