import React from 'react'
import { Link } from "react-router-dom";
const CardItems = (props) => {
    const items = props.items
    const formatter = new Intl.NumberFormat({
        minimumFractionDigits: 2
    })
    return (
        <>
            <div className=" col-12 col-sm-6 col-md-4 col-lg-3 px-2 Card-items">
                <Link to={`/shop/${items.name}`}>
                    <div className="img-container">
                        <img className="img-fluid" src={items.img1} alt="img" />
                    </div>
                    <div className="title">
                        <p className="text">{items.title}</p>
                        <p className={items.percent === 0 ? "d-none" : "number"}>-{items.percent}%</p>
                    </div>
                    <div className="prices">
                        <p className="price-after">{formatter.format(items.afterprice)}<span>T</span></p>
                        <p className={items.lastprice === 0 ? "d-none" : "price-befor"}>{formatter.format(items.lastprice)}<span>T</span></p>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default CardItems;