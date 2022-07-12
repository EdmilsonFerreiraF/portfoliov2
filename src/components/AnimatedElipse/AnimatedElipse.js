import React from 'react'

const AnimatedElipse = ({ attributes, animate, mpath }) => {
    return (
        <elipse
            cx={attributes[0]}
            cy={attributes[1]}
            transform={attributes[2]}
            rx={attributes[3]}
            ry={attributes[4]}
            fill={attributes[5]}
        >
            <animateMotion
                dur={animate[0]}
                repeatCount={animate[1]}
                rotate={animate[2]}
                begin={animate[3]}
            >
                <mpath xlinkHref={mpath} />
            </animateMotion>
        </elipse>
    )
}

export default AnimatedElipse