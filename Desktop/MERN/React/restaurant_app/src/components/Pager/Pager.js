import React from 'react';
import "./pager.css";

function Pager() {
  return (
    <div className='btn-div'>
        <button className='btn'>«</button>
        <button className='btn one'>1</button>
        <button className='btn'>2</button>
        <button className='btn'>3</button>
        <button className='btn'>4</button>
        <button className='btn'>»</button>
    </div>
  )
}

export default Pager