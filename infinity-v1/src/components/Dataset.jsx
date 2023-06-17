import React from 'react'

function Dataset() {
  return (
    <div>
        <div className="dataset-container" id='dataset'>
            <div className="dataset-background">
                <div className="left-container">
                    <h2>Free Data Sets</h2>
                    <p>Free data sets are publicly available information that are published in different official websites that are gathered in one database. API will be available soon. </p>
                    <button>Learn More</button>
                </div>
                <div className="right-container">
                    <div className="dataset-card-container">
                        <div className="dataset-card">
                            <div className="dataset-card-background">
                                <div className="image-container"></div>
                                <h3>Top Corporations in the Philippines</h3>
                                
                            </div>
                        </div>
                        <div className="dataset-card">
                            <div className="dataset-card-background">
                                <div className="image-container"></div>
                                <h3>Articles published about top corporations in the Philippines</h3>
                                
                            </div>
                        </div>
                        <div className="dataset-card">
                            <div className="dataset-card-background">
                                <div className="image-container"></div>
                                <h3>Basic contact information of top corporations in the Philippines</h3>
                                
                            </div>
                        </div>
                    </div>
                </div>
               

            </div>
        </div>
    </div>
  )
}

export default Dataset