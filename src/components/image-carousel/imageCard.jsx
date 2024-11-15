import React from "react";
import "./index.css";

const ImageCard = (props) => {
    const { "image-url": imagePath, heading, content } = props;

    return (
    <div className="outer-container-card">
        <div className="image-component">
            <img src={imagePath} alt="Image"/>
        </div>
        <div className="content-component">
            <div>{heading}</div>
            <p>{content}</p>
        </div>
        <div className="footer-component">
        </div>
    </div>)
}

export default ImageCard;