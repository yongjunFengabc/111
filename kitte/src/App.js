// import logo from './logo.svg';
import './App.css';

import Home from './components/first/first.tsx';

import React, { Component } from "react";

class App extends Component {
    state = {
        counter: 0
    };

    handleClick = () => {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 };
        });
    };
    render() {
        return (
            <div className="App">
              <Home name="typescript" enthusiasmLevel={4}/>
                <h1>I'm configuring setting up Webpack!!!</h1>
                <p>{`The count now is: ${this.state.counter}`}</p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}
export default App;


