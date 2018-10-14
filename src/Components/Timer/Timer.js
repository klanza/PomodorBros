import React, { Component } from 'react';
import styles from './timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1500,
      pause: 0,
      store: [],
      count: 0
    };
    this.workTimer = this.workTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.timerStart = this.timerStart.bind(this);
    this.timerStop = this.timerStop.bind(this);
    this.timerReset = this.timerReset.bind(this);
  }

  timerStart() {
    this.interval = setInterval(() => this.workTimer(), 1000);
    if (this.state.pause > 0) {
      clearInterval(this.pauseInterval);
    }
  }

  timerStop() {
    const { number, store, count } = this.state;
    clearInterval(this.interval);
    clearInterval(this.pauseInterval);
    this.pauseInterval = setInterval(() => this.pauseTimer(), 1000);
    this.setState({
      store: [...store, { time: number, count: count + 1 }],
      count: count + 1
    });
  }

  timerReset() {
    clearInterval(this.interval);
    clearInterval(this.pauseInterval);
    this.setState({
      number: 1500,
      store: [],
      count: 0,
      pause: 0
    });
  }

  workTimer() {
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

  pauseTimer() {
    const { pause } = this.state;
    // Re-render every interval to display time it has been paused for
    // ** Should this create a "new" pause each time or add
    //    to total time paused? **
    this.setState({
      pause: pause + 1
    });
    // When timerStop() is called, begin separate interval to track pause
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
