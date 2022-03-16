import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }

  componentDidMount(){
      console.log("el componente se cargo en el dom");
      //* ... API ...
  }

  componentDidUpdate(previousProperty, previousState){
      console.log("el componente se actualizo");
      console.log("Propiedades anteriores del componente",previousProperty);
      console.log("Estado anterior del componente",previousState);
}

  componentWillUnmount(){
      console.log("adios componentes");
  }

  increase() {
    this.setState((previousState) => {
      return {
        counter: previousState.counter + 1,
      };
    });
  }
  decrease() {
    this.setState((previousState) => {
      return {
        counter: previousState.counter - 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={() => this.increase()}>Increase</button>
        <button onClick={() => this.decrease()}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
