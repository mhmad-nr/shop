import React from 'react'
import { Link } from 'react-router-dom';
import { brandData as data } from "./data";

const Brands = () => {
    return (
        <>
            <div className="container my-3">
                <div className="brands-container">
                    {
                        data.map((url) => [
                            <div className="brand-items col-1">
                                <Link to="/shop">
                                    <img alt="img" src={url.img} />
                                </Link>
                            </div>
                        ])
                    }
                </div>
            </div>

        </>
    )
}
export default Brands