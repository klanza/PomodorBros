import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 5 };
    this.timer = this.timer.bind(this);
  }

  timerStart() {
    this.interval = setInterval(() => this.timer, 1000);
  }

  timerStop() {
    clearInterval(this.interval);
  }

  timerReset() {
    clearInterval(this.interval);
    this.setState({
      number: 5
    });
  }

  timer() {
    const { number } = this.state;
    switch (true) {
      case number === 0: {
        console.log('clearing interval');
        clearInterval(this.interval);
        this.setState({
          number: 5
        });
        break;
      }
      default: {
        console.log('default');
        this.setState({
          number: number - 1
        });
        break;
      }
    }
  }

  render() {
    const { number } = this.state;

    let start 

    return (
      <div>
        {number}
        <button onClick={}>START</button>
        <button>STOP</button>
        <button>RESET</button>
      </div>
    );
  }
}

export default Timer;
