import React, { useContext } from 'react'
// import ComC from './ComC'
 import { FirstName, Lastname } from './ComA'
function ComB() {
     const fname = useContext(FirstName);
     const lname = useContext(Lastname );
  return (
    
    <>
    <h1> My name is {fname} {lname}</h1>
    </>
  )
}

export default ComB;