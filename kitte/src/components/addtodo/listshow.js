import React, { Component } from 'react'
import { connect } from 'react-redux'



export class Listshow extends Component {
    state={
        arr:[111,333]
    }
  render() {
    return (
      <div>
        <ul>
           {this.state.arr.map(item=>{return <li>{item}</li>})}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    const {byIds,allIds}=state.todos||{};
    const todos=allIds&&allIds.length?allIds.map(id=>(byIds?{...byIds[id],id}:null)):null;
    return {todos};
}

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(Listshow)
