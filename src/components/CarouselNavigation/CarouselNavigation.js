import React from 'react'
import { TimeLineData } from '../../constants/constants'
import { CarouselButton, CarouselButtonDot, CarouselButtons } from '../TimeLine/TimeLineStyles'

const CarouselNavigation = ({ activeItem, handleClick }) => {
    return (
        <CarouselButtons>
            {TimeLineData.map((item, index) => (
                <CarouselButton
                    key={index}
                    index={index}
                    active={activeItem}
                    onClick={(e) => handleClick(e, index)}
                    type="button"
                >
                    <CarouselButtonDot active={activeItem} />
                </CarouselButton>
            ))}
        </CarouselButtons>
    )
}

export default CarouselNavigation