import React from 'react'

const LinearGradient = ({ attributes, stops }) => {
    const props = {
        id: attributes[0],
        x1: attributes[1],
        y1: attributes[2],
        x2: attributes[3],
        y2: attributes[4],
        gradientUnits: attributes[5],
    }

    const stopList =
        stops.map((stop, idx) => (
            <stop stopColor={stop[0]} stopOpacity={idx === 1 && "0"} offset={idx === 1 && "1"} />
        ))

    return (
        <>
            {
                <linearGradient
                    {...props}
                >
                    {stopList}
                </linearGradient>
            }
        </>
    )
}

export default LinearGradient