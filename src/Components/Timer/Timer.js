import React, { Component } from 'react';

const styles = {
  main: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 5 };
    this.timer = this.timer.bind(this);
    this.timerStart = this.timerStart.bind(this);
    this.timerStop = this.timerStop.bind(this);
    this.timerReset = this.timerReset.bind(this);
  }

  timerStart() {
    this.interval = setInterval(() => this.timer(), 1000);
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

    let start = (
      <div>
        <button onClick={this.timerStart}>START</button>
      </div>
    );

    let stop = (
      <div>
        <button onClick={this.timerStop}>STOP</button>
      </div>
    );

    let reset = (
      <div>
        <button onClick={this.timerReset}>RESET</button>
      </div>
    );

    return (
      <div className={styles['main']}>
        {number}
        {start}
        {stop}
        {reset}
      </div>
    );
  }
}

export default Timer;
