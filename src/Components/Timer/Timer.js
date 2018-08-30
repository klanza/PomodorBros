import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = { number: 10 };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        number: this.state.number--
      });
      console.log(number);
    }, 1000);
  }

  render() {
    return <div>{this.state.number}</div>;
  }
}

export default Timer;
