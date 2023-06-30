// import logo from './logo.svg';
import './App.css';

import Home from './components/first/first.tsx';

import React, { Component } from "react";
import Counter from './features/counter/Counter';
import Addtode from './components/addtodo/addtode';
import readruliu from './components/ruliuKnowleage/main2';
import Card from './components/card/main';
import Navbar from './common/navbar';
import Read from './components/pdfread/Read'
// import { Router } from 'express';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AiFillBug } from "react-icons/ai"
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
                
                   <Router>
                     <Navbar />
                     <Switch>
                       
                    <Route path='/' exact component={Home} />
                    <Route path='/reports' component={Addtode} />
                    <Route path='/products' component={Card} />
                    <Route path='/tool' component={Counter}></Route>
                    <Route path='/pdfread' component={Read} />
                    <Route path="/ruliuread" component={readruliu}></Route>
    
                    </Switch>

                </Router>   
                </div>

        );
    }
}
export default App;


