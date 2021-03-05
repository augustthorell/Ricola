import React from 'react'
import { motion } from 'framer-motion'
import cloudSVG from '../assets/cloud.svg'

function Clouds() {

    function topValue() {
        return (
            '500px'
        )

    }
    const xValue = '120vw'

    const cloud = {
        x: xValue,
        y: 0,
    }
    const cloudStyle = {
        position: 'absolute',
        display: 'inline-block',
        height: '100px',
        width: '100px',
        top: '100px',
        left: '-110px',
        zIndex: '1',
    }
    const cloudTransition = {
        duration: 19,
        repeat: Infinity
    }
    return (
        <>
            <motion.div
                className="cloud"
                style={cloudStyle}
                animate={cloud}
                transition={cloudTransition}

            />

        </>
    )
}



export default Clouds
