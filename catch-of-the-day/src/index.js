// let's go!
import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import Root from './root.js'

import './css/style.css';

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound'
import App from './components/App'


// class StorePicker extends React.Component {
//   render(){
//     return <p>Hello</p>
//   }
// }

ReactDOM.render(<Root/>, document.querySelector('#main'));
