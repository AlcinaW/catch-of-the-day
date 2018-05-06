import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  myInput = React.createRef();

  //property of goToStore, set to arrow function in order to find "this"
  goToStore = (event) => {
    //stop page refresh when form submits
    event.preventDefault();
    //get text from input
    console.log(this);
    //change page to /store/whatever-entered

  }
  //render + method
  render(){
    //return React.createElement('p', { className: 'hey', 'Heyoooo' });
    return (
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()} />
          <button type="submit">Visit Store ➞</button>
        </form>
    )
  }
}

export default StorePicker;
