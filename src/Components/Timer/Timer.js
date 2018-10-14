import React, { Component } from 'react';
import styles from './timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1500,
      store: [],
      count: 0
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
    const { number, store, count } = this.state;
    clearInterval(this.interval);
    this.setState({
      store: [...store, { time: number, count: count + 1 }],
      count: count + 1
    });
  }

  timerReset() {
    clearInterval(this.interval);
    this.setState({
      number: 1500,
      store: [],
      count: 0
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
    const { number, store } = this.state;
    const minutes = Math.floor(number / 60);
    const seconds = number % 60;
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
      <div className={styles.main}>
        <div className={styles.nav} />
        <div className={styles.record}>
          <ul>
            {store.map(function(item) {
              const minutes = Math.floor(item.time / 60);
              const seconds = item.time % 60;
              return (
                <li className={styles.items}>{`paused ${
                  item.count
                } times time: ${minutes}:${seconds}`}</li>
              );
            })}
          </ul>
        </div>
        <div className={styles.timer}>
          <div className={styles.display}>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
          <div className={styles.controls}>
            {start}
            {stop}
            {reset}
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
