import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
// const favSeries = 'amazon'
function Condition (){
    const favSeries = 'netflix'
    const Favs = () => {
        if(favSeries === 'netflix'){
            return(
                <Card 
                key = {Sdata[1].id}
                imgsrc= {Sdata[0].imgsrc}
                 title = {Sdata[0].title}
                 sname = {Sdata[0].sname}
                 link = {Sdata[0].link}
         
                />
            );

        }
        else {  
            return(
                <Card 
                key = {Sdata[2].id}
                imgsrc= {Sdata[2].imgsrc}
               title = {Sdata[2].title}
               sname = {Sdata[2].sname}
               link = {Sdata[2].link}
       
              />
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
