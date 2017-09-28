import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  render(){
    // Normal comment any where else
    return(
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" placeholder="Store name" required defaultValue={getFunName()} />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;
