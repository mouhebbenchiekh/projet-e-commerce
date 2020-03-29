import React from "react"
import "./shop-item.style.scss"
import Collectionitem from "./item/item.component"

const Shopitem=(props)=>{
    return(
        <div className="collection-preview">
           
                <h2 className="title">{props.title}</h2>
            
            <div className="preview">
                {props.items.filter((item,idx)=>idx<4).map(ele=>(<Collectionitem  item={ele}/>
                    ))}

            </div>
        </div>
    )
}
export default Shopitem