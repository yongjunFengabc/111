// import { error } from 'console';
import * as React from 'react';
import './first.css';
import { useState } from 'react';
export interface Props{
    name:string;
    enthusiasmLevel?: number;
}
function Home({name,enthusiasmLevel=1}:Props){
    const [flag,setFlag]=useState(0);

    if(enthusiasmLevel<=0){
        throw new Error('no smaller than one ')
    }
    function classChange(){
        setFlag(flag? 0:1);
    }

    return (
        <div>
         <p>hello{name + getExNumber(enthusiasmLevel)}</p>
         <p className={flag?'red':'black'}>改变样式</p>
         <p className='black'>黑色的</p>
         <button onClick={classChange}>点击改变颜色</button>
        </div>
    )
}

export default Home;

function getExNumber(num:number){
return Array(num+1).join('!');
}

