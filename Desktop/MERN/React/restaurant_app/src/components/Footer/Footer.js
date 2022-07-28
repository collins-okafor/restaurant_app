import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className='footer' >
        <div className='foot'>
            <h2>FOOTER</h2>
            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            <p>Powered by <a href={"#"}>w3.css</a></p>
        </div>
        <div className='blog'>
            <h2>BLOG POSTS</h2>
        </div>
        <div className='tags'>
            <h2>POPULAR TAGS</h2>
        </div>
    </div>
  )
}

export default Footer