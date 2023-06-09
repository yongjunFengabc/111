import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {addTodo} from '../../app/actions'
// import {increment} from './addist'
import {changelist,setlist} from './action'
// import reducers from './reducers';
export class Addtode extends Component {
    // state={};
    constructor(props){
        super(props);
        this.state={input:''}
    }
//     updateInput=(input)=>{
// this.setState({input});
//     }
//     handleAddTodo=()=>{
//         this.props.addTodo(this.state.input);
//         increment(this.state.input)
//         this.setState({input:''});
//     }
  render() {
    const {OnlistChange,datalist,OnInput} = this.props;
    return (
      <div>
        <input onChange={(e)=>OnInput(e.target.value)}
        value={this.props.value}></input>
        <button onClick={OnlistChange}>add</button>
        {/* <p>{datalist.join('')}</p> */}
        <div>
            <p>{datalist.join(' ')}</p>
        </div>
      </div>
    )
  }
}

 const mapStateToProps = (state) => {
    const datalist=state.list;
    const todoname=state.todoname;
    return {datalist,todoname}
}

const mapDispatchToProps = {
  
    OnlistChange:()=>(dispatch,getState)=>{
        // const name=getState().todoname;
dispatch(changelist(getState().todoname));
console.log(getState());
// dispatch(resetlist());
console.log(getState());

    },
    OnInput:(value)=>(dispatch)=>{
        // const name=getState.todoname;
        console.log('value:',value)
        dispatch(setlist({name:value}));
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addtode)