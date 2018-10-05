import React, { Component } from 'react';
import styles from './timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1500,
      minutes: '',
      seconds: ''
    };
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
      number: 1500
    });
  }

  timer() {
    const { number } = this.state;
    switch (true) {
      case number === 0: {
        console.log('clearing interval');
        clearInterval(this.interval);
        this.setState({
          number: 1500
        });
        break;
      }
      default: {
        console.log('default');
        this.setState({
          number: number - 1
        });
        console.log(this.state);
        break;
      }
    }
  }

  render() {
    const { number } = this.state;
    const minutes = Math.floor(this.state.number / 60);
    const seconds = this.state.number % 60;
    console.log(minutes, seconds);

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
        <div className={styles['nav']} />
        <div className={styles['timer']}>
          <div>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
          {start}
          {stop}
          {reset}
        </div>
      </div>
    );
  }
}

export default Timer;
