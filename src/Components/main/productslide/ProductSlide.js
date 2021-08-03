import React, { useEffect ,useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Slider from "react-slick";
const ProductSlide = (props) => {
    const { products} = props
    const [count, setCount] = useState(4)    
    const resizer = ()=>{
        let w = window.innerWidth;
        if(w>994){
            setCount(4)
        }
        else if(768<w<994)
        {
            setCount(3)
        }
        if(w<768){
            setCount(2)
        }         
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: count,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    const formatter = new Intl.NumberFormat({
        minimumFractionDigits: 2
    })
    useEffect(() => {
        resizer();
        window.addEventListener('resize', resizer);
    }, [count])

    return (
        <>
            <div className="products-contaier my-5">
                <div className="text-center">
                    <h2>پیشنهادات شگفت انگیز تگموند</h2>
                </div>
                <div className="productSlider-container ">
                    <div className="container">
                        <Slider {...settings}>
                            {products.map((items) => {
                                return (
                                    <div className=" slider-items p-3">
                                        <Link to={`/shop/${items.name}`}>

                                            <div className="img-container">
                                                <img src={items.img1} alt="img" />
                                            </div>
                                            <div className="title">
                                                <p className="text">{items.title}</p>
                                                <p className={items.percent === 0 ? "d-none" : "number"}>-{items.percent}%</p>
                                            </div>
                                            <div className="category">
                                                <p>{items.category}</p>
                                            </div>
                                            <div className="prices">
                                                <p className="price-after">{formatter.format(items.afterprice)}<span>T</span></p>
                                                <p className={items.lastprice === 0 ? "d-none" : "price-befor"}>{formatter.format(items.lastprice)}<span>T</span></p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <Link to="/shop">مشاهده همه</Link>
                </div>
            </div>


        </>
    )
}
const getProducts = products => Object.keys(products).map(id => products[id])

const mapStateToProps = state => ({
    products: getProducts(state.products)
})

export default connect(mapStateToProps)(ProductSlide);