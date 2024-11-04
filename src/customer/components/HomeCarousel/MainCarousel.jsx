import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    const items = mainCarouselData.map((item)=> 
        <img className='cursor-pointer w-full' style={{height : '75vh', objectFit : 'cover'}} role = 'presentation' src = {item.image} alt=""/>)

    console.log(items)
    return (
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
    )
};

export default MainCarousel