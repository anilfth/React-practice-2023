import React from 'react'

function Images(props) {
  return (
    <>
      <img src='{props.imgsrc}' alt='mypic' className='card__img' />
      <Images imgsrc={props.imgsrc} />
    </>
  )
}

export default Images
