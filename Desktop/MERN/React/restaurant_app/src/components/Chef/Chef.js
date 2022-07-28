import React from 'react';
import "./Chef.css"
import chef from "../../Asset/images/chef.jpg"

function Chef() {
  return (
    <div className='about'>
        <h2 className='aboutMe' >About Me, The Food Man</h2>
        <div>
            <img src={chef} className="chef" alt={"#"} />
        </div>
        <h2>I am Who I Am!</h2>
        <em>With Passion For Real, Good Food</em>
        <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world
        <br></br>with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus
        <br></br>ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        
        
        <div>

        </div>
    </div>
  )
}

export default Chef;