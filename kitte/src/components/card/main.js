// import React, { Component } from 'react';
import Checkbox from 'antd/es/checkbox/Checkbox';
import React from 'react';
import { connect } from 'react-redux';
import  {ChangeShow}  from './action';
import './card.css'
function Card({OnCardChange,show}) {
//   const {}=this.props
  return (

    <div>
      <h2>表单</h2>
      <Checkbox onChange={OnCardChange}>选择</Checkbox>
      {show && <div><p>我出现啦</p></div>}
      <div className='first'></div>
      <div className='second'>
        <div className='chi'></div>
        <div className='chi'></div>
      </div>
    </div>
  );

}

const mapStateToProps = (state) => {
    const show=state.cardcheck; 
    return {show}
}

const mapDispatchToProps =  {
OnCardChange:()=>(dispatch,getState)=>{
    dispatch(ChangeShow(!getState().cardcheck));
    console.log(getState().cardcheck)
}
}
 

 
export default connect(mapStateToProps,mapDispatchToProps)(Card);
