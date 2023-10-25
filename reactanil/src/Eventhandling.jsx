import React, { useState } from 'react'

function Eventhandling() 
{
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    // change button name 
    const [name, setName] = useState('click me');
    const bgChange = () =>{
        let newBg = "#34495e";
        setBg(newBg);
        setName("Ouchh!!");
    };
    const bgBack = () => {
        setBg(purple);
        setName("Ayyo");
    };

  return (
    <>
     <div style={{backgroundColor:bg}}>
        {/* <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button> */}
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}> {name} </button>
        </div> 
    </>
  )
}

export default Eventhandling

