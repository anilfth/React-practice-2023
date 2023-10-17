import React from 'react'

function Calcal() {
    function add(a,b) {
        let sum = a+b;
        return sum;
        
      }
      function sub(a,b) {
        let sub = a - b;
        return sub;
      }
      function mult(a,b) {
        let mult =  a*b;
        return mult;
      }
       function div(a , b) {
        let div = a / b;
        return div;
       }
  return (
    <div>
   <p>Result of addition: {add(5, 3)}</p>
      <p>Result of subtraction: {sub(10, 2)}</p>
      <p>Result of multiplication: {mult(4, 6)}</p>
      <p>Result of division: {div(12, 4)}</p>

    </div>
  )
}

export default Calcal;
//  export {add, sub, mult, div};
