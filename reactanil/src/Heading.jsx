import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

function Heading() {
  return (
    <>
      <h1 className='card__title'>Some Netflix Webseries are here</h1>
      {Sdata.map((val, index) => {
        <Card 
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
})}
    </>
  );
}

export default Heading;
