import React, { useRef } from "react";

const SliderComp = () => {
    const sliderRef = useRef(null);

    console.log(sliderRef??sliderRef.current.value)

    return (
        <div>
            <input ref={sliderRef} type="range" min="0" max="100" step={10} onChange={(e) => console.log(e.target.value)}/>
        </div>
    )
}

export default SliderComp;