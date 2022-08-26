import {useEffect} from "react";

export const useCarousel = (carouselImage, carouselText, images, mainContainer, sideSmall, sideBig) => {
    let carouselCounter = 0;

    useEffect(() => {
        startSlider();
        var timer = setInterval(goToNextSlide,5000);
        return () => {
            clearInterval(timer)
        }
    })

    const startSlider = () => {
        if(!sideSmall)
        sideSmall = 26;
        if(!sideBig)
            sideBig = 36;
        carouselImage.current.style.backgroundImage = `url(${images[0].src}`;
        mainContainer.current.style = `--side-small: ${sideSmall}; --side-big: ${sideBig}; --index: calc(1vw + 1vh);`;
            //carouselText.current.innerHTML = images[0].text;
    }

    const handleSlide = (slide) => {
        carouselImage.current.style.backgroundImage = `url(${images[slide - 1].src}`;
        //carouselText.current.innerHTML = images[slide - 1].text;
        animateSlide(carouselImage)
    }

    const animateSlide = () => {
        carouselImage.current.classList.add('fadeIn');
        setTimeout(() => {
            carouselImage.current.classList.remove('fadeIn');
        }, 700);
    }

    const goToPreviousSlide = () => {
        if (carouselCounter === 0) {
            handleSlide(images.length)
            carouselCounter = images.length;
          }
        
        handleSlide(carouselCounter)         
        carouselCounter--;
    }

    const goToNextSlide = () => {
        if (carouselCounter === images.length - 1) {
            startSlider()
            carouselCounter = -1;
            animateSlide(carouselImage)
        }
        carouselImage.current.style.backgroundImage = `url(${images[carouselCounter + 1].src}`;
        //carouselText.current.innerHTML = images[carouselCounter + 1].text;
        carouselCounter++;
        animateSlide(carouselImage)
    }

    return { goToPreviousSlide, goToNextSlide }
}