import React from "react"
import "./button.style.scss"

const Buttonitem=({children,...otherProps})=>(
    
        <button className="custom-button"  {...otherProps}>{children}</button>

    
)
export default Buttonitem