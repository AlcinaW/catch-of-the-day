import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  //set initial state when component loaded
  //use property (or constructor)
  state = {
    fishes: {},
    order: {}
  };
  //how to get item into state? add second method that takes in fish
  addFish = fish => {
    console.log("Adding a fish");
    //pass with props
    //have to use React API to update status
    //1. take a copy of the existing state, because you don't want to cause a mutation of status
    const fishes = { ...this.state.fishes };
    //2. add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. set the new fishes object to state
    //use specific method and pass in the piece that you want to update; takes the updated copy, and updates the existing fishes
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
