import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends React.Component {

  //set initial state when component loaded
  //use property (or constructor)
  state = {
    fishes: {},
    order: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    //first, reinstate local localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    console.log(localStorageRef);
    //if there is a local storage value, reinstate it
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  };

  componentDidUpdate(){
    console.log(this.state);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
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
  };

  addToOrder = (key) => {
    //take a copy of state
    const order = {...this.state.order};
    //either add to order or update the number in the order
    order[key] = order[key] + 1 || 1;
    //call setState to update the state object
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          />
      </div>
    );
  }
}

export default App;
