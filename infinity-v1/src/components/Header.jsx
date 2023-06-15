import React from 'react'
import { useState } from 'react'

function Header() {


    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)

    }

  return (
    <div className='header-container'>
        <header >
            <div className="logo-container">
                Infinity 8 Data Solutions
            </div>
            <div className={
                nav ? "nav-container nav-active" : "nav-container"
            }>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Our Services</a></li>
                    <li><a href="">Data Sets</a></li>
                    <li><a href="">Data Pro</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                
            </div>
            <button onClick={handleNav}><i class="fa-solid fa-bars"></i></button>
        </header>
    </div>
  )
}

export default Header