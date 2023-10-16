import React from 'react'

const menuCard = () => {
  return (
    <>
    <div className='card-container'>
    <div className='card'>
        <div className='card-body'>
            <span className="card-Number card-circle subtle">1</span>
            <span className='card-author subtle'> Breakfast</span>
         <h2 className='card-title'> Maggi</h2>
         <span className="card-description subtle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam veniam totam numquam expedita neque! Distinctio vel voluptatem suscipit dolorem fugit!
              </span>
              <div className='card-read'> Read</div>
        </div>
        {/* <img  src='image'    alt="images" className='card-media' /> */}
        <span className='card-tag subtle'> Order Now</span>
    </div>
</div>
</>
  );
};

export default menuCard
