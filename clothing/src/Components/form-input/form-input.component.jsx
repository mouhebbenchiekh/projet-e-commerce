import React from "react"
import "./form-input.style.scss"

const Forminput=({handelChange,label,...otherProps})=>(
    <div className="group">
<input className="form-input" onChange={handelChange} {...otherProps} />
<label className="form-input-label">{label}</label>
   </div>
)
export default Forminput