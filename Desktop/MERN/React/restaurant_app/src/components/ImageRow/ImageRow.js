import React from 'react';
import "./ImageRow.css";
import cherry from "../../Asset/images/cherries.jpg";
import croissant from "../../Asset/images/croissant.jpg";
import gondol from "../../Asset/images/gondol.jpg";
import popsicle from "../../Asset/images/popsicle.jpg"


const ImageRoll = () => {
  return (
    <div className='image-roll'>
        <div className='image-div'>
           <img src={cherry} alt={"#"}/>
           <h3>The Perfect Sandwich, A Real NYC Classic</h3>
           <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        
        <div className='image-div'>
           <img src={croissant} alt={"#"}/>
           <h3>Let Me Tell You About This Steak</h3>
           <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>

        <div className='image-div'>
           <img src={gondol} alt={"#"}/>
           <h3>Cherries, interrupted</h3>
           <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>

        <div className='image-div'>
           <img src={popsicle} alt={"#"}/>
           <h3>Once Again, Robust Wine and Vegetable Pasta</h3>
           <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
    </div>
  )
}

export default ImageRoll