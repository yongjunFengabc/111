import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import listReducer from '../components/addtodo/addist'
export default configureStore({
    reducer:{
counter:counterReducer,
list:listReducer,
    },
});