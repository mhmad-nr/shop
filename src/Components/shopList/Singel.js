import React, { useRef } from 'react'

import { connect } from "react-redux";
import { addToCart } from '../../redux/actions';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Singel = (props) => {
    const { products } = props;
    const pid = props.match.params.id;
    const addToCard = props.addToCard;
    const main = useRef()
    const formatter = new Intl.NumberFormat({
        minimumFractionDigits: 2
    })
    const changImg = (img) => {
        main.current.src = img;
    }
    const notify = () => toast.success('اضافه شد !', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    return (
        <>

            <div className='singel-container  pb-1'>
                <div className="container">
                    {products
                        .filter(item => item.name === pid)
                        .map((item, id) => {
                            return (
                                <div key={id} className="row mt-2">
                                    <div className="singel-header-container col-lg-7 col-12 p-0">
                                        <div className="imgs-container">
                                            <div className="col-12 col-md-2 h-100 d-none d-md-block">
                                                <img onClick={() => changImg(item.img1)} src={item.img1} alt="img" className="img-fluid img-items mt-2 px-1" />
                                                <img onClick={() => changImg(item.img2)} src={item.img2} alt="img" className="img-fluid img-items mt-2 px-1" />
                                                <img onClick={() => changImg(item.img3)} src={item.img3} alt="img" className="img-fluid img-items mt-2 px-1" />
                                            </div>
                                            <div className="col-12 col-md-10  h-100 px-5 p-1">
                                                <img ref={main} src={item.img1} alt="img" className="imgm img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="singel-header-container col-lg-5 col-12">
                                        <div className="tops-container">
                                            <p className="brand mb-1">{item.title}</p>
                                            <div className="d-flex align-items-center">
                                                <p className="after-price">{formatter.format(item.afterprice)}T</p>
                                                <p className={item.gift === 0 ? "d-none" : "befor-price"}>{formatter.format(item.lastprice)}T</p>
                                                <p className={item.gift === 0 ? "d-none" : "text"}>(-{item.percent}%)</p>
                                            </div>
                                            <div className={item.gift === 0 ? "d-none" : "d-flex align-items-center"}>
                                                <p className="text">سود شما از این خرید</p>
                                                <p className="text">{formatter.format(item.gift)}T</p>
                                            </div>
                                        </div>
                                        <div className="bottom-container mt-md-4">
                                            <div className="center mb-2">
                                                <button className="guidesize" type="button">
                                                    راهنمای سایز
                                                </button>
                                                <p>
                                                    {item.size}
                                                </p>

                                            </div>
                                            <div className="center pt-2">

                                                <button onClick={() => {
                                                    notify();
                                                    return addToCard(item.id)
                                                }} className="addtocard" type="button">
                                                    <i class="fas fa-shopping-cart"></i>
                                                    <p>افزودن به سبد خرید</p>
                                                </button>
                                                <ToastContainer
                                                    position="top-center"
                                                    autoClose={4000}
                                                    hideProgressBar={false}
                                                    newestOnTop={false}
                                                    closeOnClick
                                                    rtl
                                                    pauseOnFocusLoss
                                                    draggable
                                                    pauseOnHover
                                                />
                                                <button className="addtofave d-none d-md-flex" type="button">
                                                    <i class="far fa-heart"></i>
                                                    <p>بعدا میخرم</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}

                </div>
            </div>


        </>
    )
}
const getProducts = products => Object.keys(products).map(id => products[id])
const mapStateToProps = state => ({
    products: getProducts(state.products),
    count: Object.values(state.cart.quantityById)[0]
})
const mapDispatchToProps = dispatch => ({
    addToCard: productId => dispatch(addToCart(productId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Singel);