import React from 'react'

function corosal() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://secure.s.forbestravelguide.com/img/properties/burj-al-arab-jumeirah/burj-al-arab-jumeirah-one-bedroom-deluxe.jpg" className="d-block w-100" alt="image not found"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f5/8c/02/burj-al-arab-jumeirah.jpg?w=700&h=-1&s=1" className="d-block w-100" alt="image not found"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://r1imghtlak.mmtcdn.com/c1431ba6976311e7bfa70a4cef95d023.jpg" className="d-block w-100" alt="image not found"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default corosal