import React, { useState } from 'react'

function Formsreact() {
    const[name, setname] = useState();
    const [Fullname, setfullname] = useState()
    const eventInput = (event) =>{
        console.log(event.target.value);
        setname(event.target.value);
    }

    const onsubmit = () => {
        setfullname(name);
    }
  return (
    <>
    <div>
      <h1> Hello, {Fullname}</h1>
      <input type='text' placeholder='Enter a Name ' onChange={eventInput} value={name} />
      <button onClick={onsubmit}> Click Me</button>
      </div>
    </>
  )
}

export default Formsreact
