import React from 'react'
import { Link } from "react-router-dom";

const ShopHeader = () => {
    return (
        <div className="shopheader">
                <div className="header-div justify-content-end">
                    <p className="title">
                        محصولات مردانه
                    </p>
                </div>
            <div className="d-flex shop-back justify-content-end">
                <Link className=" d-flex align-items-center" to="/">بازگشت به خانه <i class="fas fa-arrow-right"></i></Link>
            </div>
        </div>
    )
}
export default ShopHeader;