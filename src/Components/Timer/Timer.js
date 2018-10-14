import React, { Component } from 'react';
import styles from './timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1500,
      sessionCount: 1,
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
    this.interval = setInterval(() => this.workTimer(), 100);
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
      count: count + 1
    });
  }

  timerReset() {
    const { number, store, count, sessionCount, pause } = this.state;
    clearInterval(this.interval);
    clearInterval(this.pauseInterval);
    this.setState({
      store: [
        ...store,
        { key: sessionCount, time: number, count: count, pause: pause }
      ],
      number: 1500,
      count: 0,
      pause: 0,
      sessionCount: sessionCount + 1
    });
  }

  workTimer() {
    const { number } = this.state;
    switch (true) {
      case number === 0: {
        this.timerReset();
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
    console.log(this.state);
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
              const duration = 1500 - item.time;
              const minutes = Math.floor(duration / 60);
              const seconds = duration % 60;

              const pMinutes = Math.floor(item.pause / 60);
              const pSeconds = item.pause % 60;
              return (
                <li className={styles.items}>
                  {`Paused ${item.count} times time: ${minutes}:${seconds}
                Time Paused : ${pMinutes}:${
                    pSeconds < 10 ? `0${pSeconds}` : pSeconds
                  }
                `}
                </li>
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
