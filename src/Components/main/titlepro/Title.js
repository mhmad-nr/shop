import React from 'react'
import { Link } from 'react-router-dom';
import { titleData as data } from "./TitleData";

const Title = () => {
    return (
        <>
            <div className="container my-2">
                <div className="row">
                    {
                        data.map((item) => {
                            return (
                                <div className="titlepro-item col-6 col-md-4">
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
                        })
                    }


                </div>
            </div>
        </>
    )
}
export default Title;