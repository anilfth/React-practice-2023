import React, { useState } from 'react'

function Digitalclock() {
 let Time = new Date().toLocaleTimeString();
 const [ctime, setTime] = useState(Time);
 const upperTime = () => {
    Time = new Date().toLocaleTimeString();
    setTime(Time)
 };
 setInterval(upperTime, 1000);
    return (
    <div>
      <h1> {ctime}</h1>
    </div>
  )
}

export default Digitalclock
