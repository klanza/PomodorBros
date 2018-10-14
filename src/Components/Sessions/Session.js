import React, { Component } from 'react';

const Session = props => {
  const store = this.props.store
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
  </ul>;
};

export default Session;