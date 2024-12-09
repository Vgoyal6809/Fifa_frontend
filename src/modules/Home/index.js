import React, { useRef } from 'react';
import Front from './Front';
import Prediction from '../Prediction';
import Optimize from '../Optimize';

export default function Home({ isMobile }) {
    const predictionRef = useRef(null);  

    const scrollToPrediction = () => {
        const targetPosition = predictionRef.current.offsetTop;  // Get the target's position from the top
        const startPosition = window.pageYOffset;  // Current scroll position
        const distance = targetPosition - startPosition;
        const duration = 2000;  // Time for the scroll (in milliseconds)
    
        let startTime = null;
    
        const animateScroll = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            window.scrollTo(0, startPosition + distance * progress);
    
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };
    
        requestAnimationFrame(animateScroll);
    };

    return (
        <>
            <Front isMobile={isMobile} scrollToPrediction={scrollToPrediction} />
            <div ref={predictionRef}> 
                <Optimize />
                <Prediction isMobile={isMobile} />
            </div>
        </>
    );
}
