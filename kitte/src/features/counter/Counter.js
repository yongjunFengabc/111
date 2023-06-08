import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrement,increment } from "./counterSlice";
import styles from './counter.module.css';

export default function  Counter() {
    const count=useSelector(state=>(state.counter.value));
    const dispatch=useDispatch();
    return (
        <div>
            <div>
                <button onClick={()=>dispatch(increment())}>incre</button>
                <p>{count}</p>
                <button onClick={()=>dispatch(decrement())}>decre</button>
            </div>
        </div>
    )
}