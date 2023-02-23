import React from 'react';

const Room = ({ room }) => {

  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>

      <div className='overflow-hidden'>
        <img src={image} alt="img" className='group-hover:scale-110 transition-all duration-300 w-full' />
      </div>

      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center'>
        Details
      </div>
    </div>
  );

};

export default Room;
