import React from 'react'

function Hero() {
  return (
    <div>
        <div className="hero hero-container">
            <div className="hero-background">
                <h1>Unlimited Possibilities</h1>
                <h3>We gather data everyday, so you wont have to</h3>
                <div className="hero-form">
                <input type="email" placeholder='Enter your email address'/>
                <button>Sign-up now, Its Free!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero