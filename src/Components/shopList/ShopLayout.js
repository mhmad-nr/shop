import React from 'react'
import ShopHeader from "./ShopHeader;";
import ShopCards from "./ShopCards";
const ShopLayout = () => {
    return (
        <>
            <section className="shoplayout-container p-0 mt-5 container">
                <div className="row">
                    <div className="shop-header p-0 m-0">
                        <ShopHeader />
                    </div>
                    <div className="shop-main p-0 m-0">
                            <ShopCards />
                    </div>
                </div>
            </section>
        </>
    )
}
export default ShopLayout;