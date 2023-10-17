import React from 'react'

function importExport() {
    const youtuber = "Anil";
    const favSub = "Computer";
    function myName(){
        let name = "Anil"
        return name;
     }
     function myNames(){
        let name = "Annubhav";
        return name
     }
  return (
    <div>
      <h1> my name is {youtuber}</h1>
      <h2> my favSub is {favSub}</h2>
      <ol>
        <li> {myName()}</li>
        <li>{myNames()}</li>
      </ol>
    </div>
  )
}


export default importExport;
