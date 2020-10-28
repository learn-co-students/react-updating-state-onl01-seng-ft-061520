import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      toggled: false
    };
  }
 
  handleClick = () => {
    // Update our state here...
    this.setState( previousState => {
        return {
          toggled: !previousState.toggled
        }
      })
  };
 
  render() {
    return (
      <div>
        <p>This light is {this.state.toggled ? 'OFF' : 'ON'}!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;