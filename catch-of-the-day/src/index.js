// let's go!
import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './css/style.css';

import StorePicker from './components/StorePicker';
import App from './components/App'

// class StorePicker extends React.Component {
//   render(){
//     return <p>Hello</p>
//   }
// }

ReactDOM.render(<App/>, document.querySelector('#main'));
