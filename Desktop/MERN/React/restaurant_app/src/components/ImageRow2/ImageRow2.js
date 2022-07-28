import React from 'react';
import "./ImageRow2.css";
import salmon from "../../Asset/images/salmon.jpg";
import sandwich from "../../Asset/images/sandwich.jpg";
import steak from "../../Asset/images/steak.jpg";
import wine from "../../Asset/images/wine.jpg"

const ImageRow2 = () => {
  return (
    <div className='image-roll'>
        <div className='image-div'>
           <img src={salmon} alt={"#"}/>
           <h3>The Perfect Sandwich, A Real NYC Classic</h3>
           <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        
        <div className='image-div'>
           <img src={sandwich} alt={"#"}/>
           <h3>Let Me Tell You About This Steak</h3>
           <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>

        <div className='image-div'>
           <img src={steak} alt={"#"}/>
           <h3>Cherries, interrupted</h3>
           <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>

        <div className='image-div'>
           <img src={wine} alt={"#"}/>
           <h3>Once Again, Robust Wine and Vegetable Pasta</h3>
           <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
    </div>
  )
}

export default ImageRow2