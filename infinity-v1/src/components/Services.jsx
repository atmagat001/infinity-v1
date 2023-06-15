import React from 'react'

function Services() {
  return (
    <div>
        <div className="services">
            <div className="services-background">
                <h2>Our Services</h2>
                <p>We are a startup data science company and we know the value of data in growing your business. For now we only have 1 product - The top corporations database in the Philippines. Other services are in the development stage and we will keep you updated in our progress to make all these services available. </p>
                <div className="card-container animate__fadeInDown">
                    <div className="card data-set ">
                        <div className="card-background">
                            <h3>Data Sets</h3>
                            <p>Our data sets are updated daily, and are available for download in a variety of formats</p>
                            <button>Learn More</button>

                        </div>
                    </div>
                    <div className="card data-pro">
                        <div className="card-background">
                            <h3>Data Pro</h3>
                            <p>Our data sets are updated daily, and are available for download in a variety of formats</p>
                            <button>Learn More</button>

                        </div>
                    </div>
                    <div className="card estate-pro" >
                        <div className="card-background">
                            <h3>Estate Pro</h3>
                            <p>Our data sets are updated daily, and are available for download in a variety of formats</p>
                            <button>Learn More</button>

                        </div>
                    </div>
                    <div className="card web-devt">
                        <div className="card-background">
                            <h3>Web App Development</h3>
                            <p>Our data sets are updated daily, and are available for download in a variety of formats</p>
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