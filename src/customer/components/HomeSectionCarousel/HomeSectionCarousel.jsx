import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarousel = ({ data = [], sectionName }) => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = Array.isArray(data) ? data.slice(0, 10).map((item) => (
        <HomeSectionCard key={item.id} product={item} />
    )) : [];

    const [activeIndex, setActiveIndex] = useState(0);
    const visibleItems = 5;

    const slideNext = () => {
        if (activeIndex < items.length - visibleItems) {
            setActiveIndex(prevIndex => prevIndex + 1);
        }
    };

    const slidePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(prevIndex => prevIndex - 1);
        }
    };

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    activeIndex={activeIndex}
                    onSlideChanged={(e) => setActiveIndex(e.item)}
                    disableDotsControls
                    disableButtonsControls
                    controlsStrategy="alternate"
                />
                {/* Custom Prev Button */}
                <Button
                    variant="contained"
                    onClick={slidePrev}
                    disabled={activeIndex === 0}
                    sx={{
                        position: 'absolute',
                        left: '0rem',
                        top: '50%',
                        transform: 'translate(-50%, -50%) rotate(90deg)',
                        bgcolor: 'white',
                        color: 'black',
                        '&:hover': { bgcolor: 'lightgray' },
                    }}
                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(270deg)", color: "black" }} />
                </Button>
                {/* Custom Next Button */}
                <Button
                    variant="contained"
                    onClick={slideNext}
                    disabled={activeIndex >= items.length - visibleItems}
                    sx={{
                        position: 'absolute',
                        right: '-3rem',
                        top: '50%',
                        transform: 'translate(-50%, -50%) rotate(90deg)',
                        bgcolor: 'white',
                        color: 'black',
                        '&:hover': { bgcolor: 'lightgray' },
                    }}
                >
                    <KeyboardArrowRightIcon sx={{ transform: "rotate(270deg)", color: "black" }} />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;