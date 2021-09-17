import React,{useState} from "react";

import CroppingCSS from "./Cropping.module.css";



function Preview(props){

    
    
    return (props.trigger) ? (
        <div>
        <button className={CroppingCSS.close} onClick={() => props.setTrigger(false)}><svg  width="41" height="40" viewBox="0 0 19 18" fill="white" xmlns="http://www.w3.org/2000/svg">
<path fill="#000000" d="M14 4.5L5 13.5" stroke="#999999" stroke-width="1.82693" stroke-linecap="round" stroke-linejoin="round" />
<path fill="#000000" d="M5 4.5L14 13.5" stroke="#999999" stroke-width="1.82693" stroke-linecap="round" stroke-linejoin="round" />
</svg>
</button>
        {props.children}
         
        </div>
    ) : "";
}

        export default Preview;