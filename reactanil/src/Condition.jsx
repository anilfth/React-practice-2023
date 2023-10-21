import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
import Netflix from './Netflix'
import Amazon from './Amazon'
// const favSeries = 'amazon'
function Condition (){
    const favSeries = 'netflix'
    const Favs = () => {
        if(favSeries === 'netflix'){
            return(
                <Netflix />
            );

        }
        else {  
            return(
                <Amazon/>
            )
        }
    }
    
  return (
    <>
    <Favs/>
     </>
  )
}

export default Condition
