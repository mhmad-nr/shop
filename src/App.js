import React, { useEffect, lazy } from 'react'
import "./sass/Main.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { data } from "./api/mainApi";
import { connect } from "react-redux";
import { receiveProducts } from "./redux/actions";
import ScrollToTop from './ScrollToTop';

const App = (props) => {
    const Slider = lazy(()=>import("./Components/main/slider/Slider"))
    const Brands = lazy(()=>import("./Components/main/brands/Brands"))
    const Title = lazy(()=>import('./Components/main/titlepro/Title'))
    const Icons = lazy(()=>import('./Components/main/comIcons/Icons'))
    const Category = lazy(()=>import('./Components/main/category/Category'))
    const ProductSlide = lazy(()=>import('./Components/main/productslide/ProductSlide'))
    const Cart = lazy(()=>import("./Components/shopList/Cart"))
    const ShopLayout = lazy(()=>import('./Components/shopList/ShopLayout'))
    const Singel = lazy(()=>import('./Components/shopList/Singel'))

    useEffect(() => {
        const receiveProducts = props.receiveProducts;
        receiveProducts(data)
    }, [])

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Layout>
                    <Route exact path={"/"} component={Slider} />
                    <Route exact path={"/"} component={Brands} />
                    <Route exact path={"/"} component={Title} />
                    <Route exact path={"/"} component={Icons} />
                    <Route exact path={"/"} component={Category} />
                    <Route exact path={"/"} component={ProductSlide} />
                    <Route exact path={"/cart"} component={Cart} />
                    <Route exact path={"/shop"} component={ShopLayout} />
                    <Route exact path={"/shop/:id"} component={Singel} />
                </Layout>
            </BrowserRouter>
        </>
    )
}
const mapDispatchToProps = dispach => ({
    receiveProducts: products => dispach(receiveProducts(products))
})
export default connect(null, mapDispatchToProps)(App);




