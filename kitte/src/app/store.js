import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import lists from "../components/addtodo/reducers/changelist"
// import listReducer from '../components/addtodo/addist'
import settodoname from "../components/addtodo/reducers/setinput"
import changeshow from '../components/card/reducer/changeshow';
export default configureStore({
    reducer:{
counter:counterReducer,
// list:listReducer,
list:lists,
todoname:settodoname,
cardcheck:changeshow,
    },
});