import React from 'react'

const AnimatedPath = ({ attributes, animate, mpath }) => {
    return (
        <path
            d={attributes[0]}
            transform={attributes[1]}
            stroke={attributes[2]}
        >
            <animateMotion
                dur={animate[0]}
                repeatCount={animate[1]}
                rotate={animate[2]}
                begin={animate[3]}
            >
                <mpath xlinkHref={mpath} />
            </animateMotion>
        </path>
    )
}

export default AnimatedPath