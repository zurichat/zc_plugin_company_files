import React,{useState} from "react";

import CroppingCSS from "./Cropping.module.css";
import Times from "../../../public/Icons/x/active.svg"



function Preview(props){

    
    
    return (props.trigger) ? (
        <div>
        <button className={CroppingCSS.close} onClick={() => props.setTrigger(false)}>Cancel
</button>
<img src={Times} className={CroppingCSS.times} onClick={() => props.setTrigger(false)} />


        {props.children}
         
        </div>
    ) : "";
}

        export default Preview;