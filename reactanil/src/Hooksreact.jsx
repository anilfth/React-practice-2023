import React, { useState } from 'react'
import './index.css';
function Hooksreact() {
    // let count = 1;
    const state = useState();
    const [count, setCount] = useState(0);
const IncNum = () => {
    setCount(count +1 )
    // console.log("clicked " + count++);
};
  return (
    <>
      <h1> {count}</h1>
      <button  onClick={IncNum}> Click</button>
    </>
  )
}

export default Hooksreact
