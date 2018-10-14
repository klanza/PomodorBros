import React from 'react';

const Session = (props) => {
  const {item} = props
  return (
    <ul key={item.sessionCount}>
      <li>`${item.time}`</li>
      <li>`${item.count}`</li>
      <li>`${item.pause}`</li>
    </ul>
  )
};

export default Session;
