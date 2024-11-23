import React, { useRef } from 'react';
import Front from './Front';
import Prediction from '../Prediction';
import Optimize from '../Optimize';
import FootballAnalysis from '../Prediction/FootballAnalysis';

export default function Home({ isMobile }) {
    const predictionRef = useRef(null);  

    const scrollToPrediction = () => {
        predictionRef.current.scrollIntoView({ behavior: 'smooth' }); 
    };

    return (
        <>
            <Front isMobile={isMobile} scrollToPrediction={scrollToPrediction} />
            <div ref={predictionRef}> 
                {/* <Prediction isMobile={isMobile} /> */}
                <Optimize />
            </div>
        </>
    );
}
