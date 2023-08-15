import React, { useRef } from 'react';
import { useState,useMemo } from 'react';
import './index.css';
import list from './tablesource';
import {Table,Input,Button}from 'antd';
export default function TableList(){
    const [tableList,setTableList] = useState(list);
    // const [name,setName] = useState('');
    const name=useRef('')
    console.log("tablelist",tableList);
    function getname(e){
        name.current=e.target.value;
      
    }
    function filterByName(name){
        const temp=tableList.filter(item=>item.name===name)
         setTableList(temp)
    }
const colum=[{title:'name',key:'name', dataIndex: 'name'},{title:'tel',key:'tel', dataIndex: 'tel',},{title:'location',key:'location',dataIndex:'location'},{title:'single',key:'single',dataIndex:'single'},{title:'busy',key:'busy',dataIndex:'busy'}];
    return (
        <div className='format'>
         <div>123,table测试</div>
            <div className='filter'>
            <span>姓名</span><Input placeholder='姓名' onChange={getname}></Input><Button className='button' type="primary" onClick={()=>filterByName(name.current)}><span className='button'>查找</span></Button>
            </div>
        <Table className='table' columns={colum} dataSource={tableList}></Table>

        </div>
       
    )

}