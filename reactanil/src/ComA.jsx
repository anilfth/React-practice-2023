import React, { createContext } from 'react'
import ComB from './ComB'
const FirstName = createContext();
const Lastname = createContext();
function ComA() {
  return (
  <>   
  <FirstName.Provider value={"Anil"}>
    <Lastname.Provider value={"Kumar"}>
    <ComB/>
    </Lastname.Provider>
  
  </FirstName.Provider>
  </>
   
  )
}

export default ComA
 export {FirstName, Lastname};