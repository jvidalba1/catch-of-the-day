import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound'
import App from './components/App'

const Root = (props) => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

// We can use too 

// function Header(props) {
// }

// var Header = function(props) {  
// }


export default Root;
