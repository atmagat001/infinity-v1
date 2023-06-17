import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-background">
                <div className="footer-left-container">
                    <h2>Infinity Eight Data Solutions Inc. </h2>
                    <p>5th Floor Phinma Plaza, Rockwell Center Makati City</p>
                    <p>Tel: 02 8396 6612</p>
                    <a href="mailto: inquire@infinity8data.com">inquire@infinity8data.com</a>
                </div>

                <div className="footer-right-container">
                    <div className="footer-company footer-card">
                        <h3>Company</h3>
                        <p>How it works?</p>
                        <p>Pricing</p>
                        <p>Documentation</p>
                    </div>
                    <div className="footer-quicklinks footer-card">
                        <h3>Quick Links</h3>
                        <p>Pricing</p>
                        <p>Resources</p>

                    </div>
                    <div className="footer-subscribe footer-card">
                        <h3>Product Updates</h3>
                        <input type="text" placeholder='Get Product Updates' />
                        <button>Enter Your Email Address</button>
                    </div>
                </div>
            </div>
            <p>2023 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer