import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {

  constructor(){
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key){
    const fish = this.props.fishes[key];
    // take a copy of that fish and update it with the new data
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish);
  }

  renderInventory(key){
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} placeholder="FIsh name" 
          onChange={(e) => this.handleChange(e, key)} 
        />
        <input type="text" name="price" value={fish.price} placeholder="FIsh price" 
          onChange={(e) => this.handleChange(e, key)} 
        />
        <select type="text" name="status" value={fish.status} placeholder="FIsh status" onChange={(e) => this.handleChange(e, key)} >
          <option value="available">Fresh!</option>
          <option value="unvailable">Sold out!</option>
        </select>
        <textarea type="text" name="desc" value={fish.desc} placeholder="FIsh desc" 
          onChange={(e) => this.handleChange(e, key)}>
        </textarea>
        <input type="text" name="image" value={fish.image} placeholder="FIsh image" 
          onChange={(e) => this.handleChange(e, key)} 
        />
      </div>
    )
  }

  render() {
    return(
      <div>
        <h3>Inventory</h3>
        {Object.keys(this.props.fishes).map(key => this.renderInventory(key))}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
