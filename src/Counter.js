import React from "react";

// 1. create class and child of React Component
class Counter extends React.Component {
  // 3. To use state we need the constructor function
  constructor(props) {
    super(props);

    //4.  one property for each state property
    this.state = {
      count: 5,
    };
    // 7. must be done to use state
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  //6. functions should be class methods
  handleDecrement() {
    //9. update state
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  // 2. Every class needs to have render method which returns JSX
  render() {


    return (
      <div>
        {/* 8. connect functions with JSX */}
        <button onClick={this.handleDecrement}>-</button>
        {/* 5. to accss state do this */}
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
