import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'
import base from '../base';

class App extends React.Component {

  constructor(){
    super()
    this.addFish = this.addFish.bind(this); // set addFish in App component
    this.loadSamples = this.loadSamples.bind(this); // set loadSamples in App component
    this.addToOrder = this.addToOrder.bind(this); // set loadSamples in App component
    this.updateFish = this.updateFish.bind(this);

    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    }
  }

  componentWillMount(){
    // this runs right the <App> is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
      {
        context: this,
        state: 'fishes'
      }
    );

    // check if there is any order is local storage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef) {
      // update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState){
    // nextState, the new state set
    localStorage.setItem(`order-${this.props.params.storeId}`, 
      JSON.stringify(nextState.order));
  }

  addFish(fish){
    // get a copy from the state
    //update the state
    // ... => object spread
    const fishes = {...this.state.fishes};
    
    //add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    // Set state
    this.setState({ fishes })
  }

  updateFish(key, updatedFish) {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({fishes});
  }

  addToOrder(key){
    // get a copy from the state
    //update the state
    // ... => object spread
    const order = {...this.state.order};
    
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;

    // update order state
    this.setState({ order })
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
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(
                  key => <Fish key={key} 
                    index={key} 
                    details={this.state.fishes[key]} 
                    addToOrder={this.addToOrder} 
                  />
                )
                // error with this, it's null
                // .map(function (key){
                //   return <Fish key={key} details={this.state.fishes[key]}/>;
                // })
            }
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order} 
          params={this.props.params}
        />
        <Inventory 
          addFish={this.addFish} 
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
        />
      </div>
    )
  }
}

export default App;
