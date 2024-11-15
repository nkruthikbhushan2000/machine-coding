import React,{useEffect, useRef} from "react";
import "./index.css";

const GridComponent = () => {
    //TODO: Learn to add multiple userefs in react and how to use them
    // const GridRefs = useRef([]);
    
    const memArr = new Set();

    const handleClick = (event) => {
        console.log(event.target.getAttribute("data-id"));
        customDebounce(checkComplete, 1000);
    }

    const checkComplete = () => {

    }


    //TODO:Learn debouce and how to use it
    const customDebounce = (fn, delay) => {
        let debounceTimer;
        return function(...args) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => fn.apply(this, args), delay);
        }
    }

    return (
        <div className="grid-container">
           {[...Array(3)].fill(0).map((ele, id)=>{
            return <div className="grid-row" key={id}>
                {[...Array(3)].fill(0).map((ele,id2) =>{
                    return <div className="grid-col" data-id={`${id}${id2}`} onClick={handleClick} key={`${id}${id2}`}></div>
                })}
            </div>
           })}
        </div>
    )
}

export default GridComponent;