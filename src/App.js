import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from './components/Header/index'
import Home from './components/Home/index'
import About from './components/About/index'
import './App.css'

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/sobre"
          component={About}
        />
      </main>
    );
  }
}


export default App;
