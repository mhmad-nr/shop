import React from 'react'
import imgtop from "./datacatogorys/top.jpg";
import imgbottom from "./datacatogorys/bottom.jpg";
import { data } from "./Categorydata";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 mag-app col-md-4">
                        <img className='img-fluid' src={imgtop} alt='img' />
                        <h3>مجله مد تگ‌مگ</h3>
                        <p>.تگ مگ دنبال کنید</p>
                        <Link to="/shop">مشاهده</Link>
                    </div>
                    {
                        data.map((item, index) => {
                            if (index !== 6) {
                                return (
                                    <div className="catepro-item col-6 my-2 col-md-4">
                                        <Link to="/shop">
                                            <span className="span-ver top-top"></span>
                                            <span className="span-hor top-right"></span>
                                            <img className="img-title" src={item.img} alt="img" />
                                            <span className="span-hor bottom-bottom"></span>
                                            <span className="span-ver bottom-left"></span>
                                            <div className="texts">
                                                <h1>{item.header}</h1>
                                                <p>{item.title}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="d-none d-md-block col-4 py-3 py-4">
                                        <div className="all-container">
                                            <h1>{item.img}</h1>
                                            <h3>{item.header}</h3>
                                            <Link to="/shop">{item.title}</Link>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    <div className="col-6 mag-app col-md-4">

                        <h3>اپلیکیشن تگ‌موند</h3>
                        <Link to="/shop">دانلود</Link>
                        <img className='img-fluid' src={imgbottom} alt='img' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;