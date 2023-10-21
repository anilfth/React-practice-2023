// import React from 'react'
 const SlotM = (props) =>{
//     let x = '😀';
//     let y = '😀';
    // let z = '😀';
    // let z = '😍';
    // let x = props.x;
    // let y = props.y;
    // let z = props.z; 
     //or
    let {x,y,z} = props; // this is called object destrucuring 
     if((props.x === props.y)&&(props.y === props.z)){
    return(
  <div className='slot_inner'>
 <h1> {x} {y} {z} </h1>
 <h1> This is matching</h1>
 <hr/>

  </div>
    )
     } else{
        return(
            <div className='slot_inner'>
           <h1> {x} {y} {z} </h1>
           <h1> This  is not matching</h1>
           <hr/>
          
            </div>
              )
     }
 }
function Slotmachine() {
  return (
    <>
      <h1 className='heading_style'> Welcome to slot machine Game</h1>
      <SlotM x='😀' y='😀' z ='😀'/>
      <hr/>
      <SlotM x='😀' y='😆' z ='🤣'/>
      <hr/>
      <SlotM x='😀' y='😆' z ='🤣'/>
      <hr/>
      <SlotM x='💋' y='💋' z ='💋'/>
      <hr/>
    </>
  )
}

export default Slotmachine
