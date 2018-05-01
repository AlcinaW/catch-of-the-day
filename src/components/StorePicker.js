import React from 'react';

class StorePicker extends React.Component {
  //render + method
  render(){
    //return React.createElement('p', { className: 'hey', 'Heyoooo' });
    return (
        <form className="store-selector">
          <h2>Please Enter A Store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store ➞</button>
        </form>
    )
  }
}

export default StorePicker;
