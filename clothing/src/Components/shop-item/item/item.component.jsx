import React from "react"
import "./item.style.scss"

function Collectionitem({item}){

    return(
        <div className="collection-item">
            <div  className="image" 
            style={{backgroundImage :`url(${item.imageUrl})`}}
            />
            <div className="collecion-footer">
                <span>{item.name}</span>
                <span>{item.price }</span>

            </div>

        </div>   )
}
export default Collectionitem;