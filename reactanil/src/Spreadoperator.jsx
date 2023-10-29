import React from 'react'
function Spreadoperator() {
const arr = ['anil', 'anubhav'];
const bioData = [...arr, 'vikky', 'ayush', 'nikhil'];
console.log(bioData);

const games1 = ['devil war', 'pubg', 'freefire', 'evil'];
const games2 = ['bgmi', 'subways surface', 'chess'];
const addGames = [...games1, ...games2];
console.log(addGames);
  return (
    <>
   
    </>
  )
}

export default Spreadoperator
