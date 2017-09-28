import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log("Gonna make some fish!");

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return(
      <form ref={(form) => this.fishForm = form} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish name"/>
        <input ref={(input) => this.price = input} type="text" placeholder="Fish price"/>
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea ref={(input) => this.description = input} placeholder="Fish Description"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image"/>
        <button type="submit">+ Add item</button>
      </form>
    )
  }
}

export default AddFishForm;
