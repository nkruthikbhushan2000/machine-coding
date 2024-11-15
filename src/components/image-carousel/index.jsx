import ImageCard from "./imageCard";
import CarouselList from "../../utils/CarouselList.json";
import React, { useState, useRef } from "react";
import "./index.css";

const ImageCarousel = () => {
    const { carousels } = CarouselList;
    const [isActive, setActive] = useState(1);
    const carouselScroll = useRef();

    //TODO:Learn about scrollLeft , scrollRight, scrollTop and scrollBottom

    const getNextElement = () => {
        carouselScroll.current.scrollLeft += 200;
        setActive(isActive === carousels.length? 1 : isActive + 1);
    }

    const getPreviousElement = () => {
        carouselScroll.current.scrollLeft -= 200;
        setActive(isActive === 1? carousels.length: isActive - 1);
    }

    //TODO:The hidden cards is still taking up space and scroll bar below (horizontally)

    return (
    <div className="carousel-outercontainer">
         <button className="carousel-prev-button" onClick={getPreviousElement}>Prev</button>
        <div className="carousel-container" ref={carouselScroll}>
            <div className="fake-card">
                <ImageCard />
            </div>
        {carousels.map((item) => {
            return (
                <div className={`${isActive == item.id? "active-card":""}`}>
                <ImageCard  {...item} key={item.id}/>
                </div>
            )
        })}
        </div>
        <button className="carousel-next-button" onClick={getNextElement}>Next</button>
    </div>)
}

export default ImageCarousel;