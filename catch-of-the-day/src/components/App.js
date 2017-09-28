import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'

class App extends React.Component {

  constructor(){
    super()
    this.addFish = this.addFish.bind(this); // set addFish in App component
    this.loadSamples = this.loadSamples.bind(this); // set loadSamples in App component
    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish){
    // get a copy from the state
    //update the state
    const fishes ={...this.state.fishes};
    
    //add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    // Set state
    this.setState({ fishes })
  }

  loadSamples(){
    this.setState(
      { fishes: sampleFishes }
    );
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market"/>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
