import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  // one way to associate this with StorePicker component inside goToStore function
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log("You changed the url");

    // first grab the text from the box
    // const value = $('input').val() jQuery way
    const storeId = this.storeInput.value;

    // second we're going to transition from / to /store/:storeIde
    this.context.router.transitionTo(`/store/${storeId}`);

  }

  render(){
    // Normal comment any where else
    return(
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please enter a store</h2>
        <input type="text" placeholder="Store name" required defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

// it tells to React that StorePicker components is expecting something called router
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
