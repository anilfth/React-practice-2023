import React from 'react'
import {FirstName, Lastname}from './ComA'
function ComC() {
  return (
   <>
   <FirstName.Consumer>
    {(fname) => {
        return (
        <Lastname.Consumer>
         {(lname) => {
            return (
                <h1> My name is {fname} {lname}</h1>
            )
         }}
        </Lastname.Consumer>
        )
    }}
   </FirstName.Consumer>
   </>
  )
}

export default ComC