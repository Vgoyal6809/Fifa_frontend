import React from 'react'
import Front from './Front'
import Prediction from '../Prediction'

export default function Home({ isMobile }) {
    return (
        <>
            <Front isMobile={isMobile} />
            <Prediction isMobile={isMobile} />
        </>
    )
}
