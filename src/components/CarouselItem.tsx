import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
const playIcon = require('../assets/static/icons8-circled-play-50.png')
const plusIcon = require('../assets/static/icons8-add-50.png')

interface CarouselItemProps {
    cover: string,
    title: string,
    year: string,
    contentRating: string
}

const CarouselItem = ({cover, title, year, contentRating}: CarouselItemProps) => (
    <div className="carousel-item">
        <img className="carousel-item__image" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play"/>
                <img className="carousel-item__details--img" src={plusIcon} alt="Add"/>
            </div>
            <p className="carousel-item__details--title"> {title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating}`}
            </p>
        </div>
    </div>
)

export default CarouselItem