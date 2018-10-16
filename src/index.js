import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import App from './App'
import WebFont from 'webfontloader'
import * as serviceWorker from './serviceWorker'

WebFont.load({
  google: {
    families: ['Krub:300,400,400i,600', 'sans-serif']
  }
})

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
