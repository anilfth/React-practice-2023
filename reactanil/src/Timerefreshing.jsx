import React, { useState } from 'react'

function Timerefreshing() {
    let newTime = new Date().toLocaleTimeString();
    const [cTime, setCTime] = useState(newTime)
    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCTime(newTime);
    }
  return (
    <div>
      <h1> This is Time Refreshing </h1>
      <h1>  {cTime}</h1>
      <button onClick={UpdateTime}> Get Time</button>
    </div>
  )
}

export default Timerefreshing
