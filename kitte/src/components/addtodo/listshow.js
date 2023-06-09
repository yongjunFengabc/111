import React, { Component } from 'react'
import { connect } from 'react-redux'



export class Listshow extends Component {

  render() {
    const {todos}=this.props;
    return (
      <div>
        <ul>
           {/* {this.todos.map(item=>{return <li>{item}</li>})} */}
           {todos.map((item,index)=>{return <li key={index}>{item}</li>})}
        </ul>
        {/* <p>{this.todos}</p> */}
        <p>这里应该有数据</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    // const {byIds,allIds}=state.todos||{};
    const todos=state.list;
    // const todos=allIds&&allIds.length?allIds.map(id=>(byIds?{...byIds[id],id}:null)):null;
    return {todos};
}

// const mapDispatchToProps = {}

export default connect(mapStateToProps,null)(Listshow)
