import React from "react"
import "./shoppage.style.scss"
import SHOP_DATA from "../data/2.3 shop.data"
import Shopitem from "../Components/shop-item/shop-item.component"

class Shoppage extends React.Component{
    constructor(){
        super()
        this.state={
            collection : SHOP_DATA
        }
    }
    render(){
        return(
            <div>
                {this.state.collection.map(({title,items,id})=>(<Shopitem title={title} items={items} key={id} />))}
            </div>

        )

    }
}
export default Shoppage