import React from 'react'
import Button from "@material-ui/core/Button";
import AddIcon from '@mui/icons-material/Add';
function Todomaterialui() {
  return (
    <>
     <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1> ToDo List</h1>
        <br/>
        <input type='text' placeholder='add items' />
        <Button className='newBtn'>
        <AddIcon />
        </Button>
        </div> 
      
      </div> 
    </>
  )
}

export default Todomaterialui
