import React from 'react'
import { connect } from "react-redux";
import CardItems from "./CardItems";

const ShopCards = (props) => {
    const products = props.products
    console.log(products);
    return (
        <div className="pt-2 slider-rows ">
            <div className="row">
                {products.map((items) => {
                    return (
                        <CardItems items={items} />
                    )
                })}
            </div>
        </div>
    )
}
const getProducts = products => Object.keys(products).map(id => products[id])
const mapStateToProps = state => ({
    products: getProducts(state.products)
})
export default connect(mapStateToProps)(ShopCards);