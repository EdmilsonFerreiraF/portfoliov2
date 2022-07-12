import React from 'react'

const RadialGradient = ({ type, attributes, stops }) => {
    const props = {
        id: attributes[0],
        cx: attributes[1],
        cy: attributes[2],
        r: attributes[3],
        gradientUnits: attributes[4],
        gradientTransform: attributes[5],
    }

    const stopList =
        stops.map((stop, idx) => (
            <stop stopColor={stop[0]} stopOpacity={idx === 1 && "0"} offset={idx === 1 && "1"} />
        ))

    return (
        <>
            {
                <radialGradient
                    {...props}
                >
                    {stopList}
                </radialGradient>
            }
        </>
    )
}

export default RadialGradient