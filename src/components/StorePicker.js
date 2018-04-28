import React from 'react';

class StorePicker extends React.Component {
  //render + method
  render(){
    //return React.createElement('p', { className: 'hey', 'Heyoooo' });
    return (
      <React.Fragment>
        <form className="store-selector">
          <h2>Please Enter A Store</h2>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;
