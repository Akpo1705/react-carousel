import React, { useRef } from 'react'
import { useCarousel } from '../hooks/usecarousel';
import '../styles/carousel.css'

// function uuidv4() {
//     return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
//       (((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & 15) >> c / 4).toString(16)
//     );
// }

export const Carousel = ({images, sideSmall, sideBig}) => {

    const mainContainer = useRef(null)
    const carouselImage = useRef(null);
    const carouselText = useRef(null);

    const { goToPreviousSlide, goToNextSlide } = useCarousel(carouselImage, carouselText, images, mainContainer,sideSmall, sideBig)

    return (
        <div className='carousel-container' ref={mainContainer}>
            <div className='carousel' ref={carouselImage}>
                <div className="carousel--content">
                <button onClick={goToPreviousSlide} className="carousel__btn-left">
                    <i className="fas fa-angle-left"></i>
                </button>
                {/* <div className="carousel--feature">
                    <h1 className="feature--title">Dreaming</h1> 
                    <p ref={carouselText} className="feature--text"></p>
                    <button className="carousel__btn">Get started</button>
                </div> */}
                <button onClick={goToNextSlide} className="carousel__btn-right">
                    <i className="fas fa-angle-right"></i>
                </button>
                </div>
            </div>
        </div>
    )
}
