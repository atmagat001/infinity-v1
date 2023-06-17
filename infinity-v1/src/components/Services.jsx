import React from 'react'

function Services() {
  return (
    <div>
        <div className="services">
            <div className="services-background">
                <h2>Our Services</h2>
                <p>We are a startup data science company and we know the value of data in growing your business. For now we only have 1 product - <strong>The Top Corporations in the Philippines- Database</strong>. Other services are in the development stage and we will keep you updated in our progress to make all these services available. </p>
                <div className="card-container animate__fadeInDown">
                    <div className="card data-set ">
                        <div className="card-background">
                            <h3>Data Sets</h3>
                            <p>Use our gathered data for your research, analysis and even marketing your products. API will be available soon</p>
                            <button>Learn More</button>

                        </div>
                    </div>
                    <div className="card data-pro">
                        <div className="card-background">
                            <h3>Data Pro</h3>
                            <p>Data that are highly valuable that can further improve research and analytics.</p>
                            <button>Learn More</button>

                        </div>
                    </div>
                    <div className="card estate-pro" >
                        <div className="card-background">
                            <h3>Estate Pro</h3>
                            <p>CRM solution for Real estate brokers and agents</p>
                            <a href="https://estateproapp.io" target='_blank' rel="noreferrer">Learn More</a>

                        </div>
                    </div>
                    <div className="card web-devt">
                        <div className="card-background">
                            <h3>Web App Development</h3>
                            <p>Software as a service products that will help you in managing businesses and or teams.</p>
                            <button>Learn More</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Services