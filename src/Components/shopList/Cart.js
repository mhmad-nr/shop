import React from 'react';
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { checkout, deleteFromCart } from "../../redux/actions";
const Cart = (props) => {
    const formatter = new Intl.NumberFormat({
        minimumFractionDigits: 2
    })
    const { products, total, checkout, deleteFromCart } = props
    return (
        <div className="cart-container mt-4">
            <div className="title">
                <h3>سبد خرید</h3>
            </div>
            {total !== 0 ?
                <>
                    <div className="container btns">
                        <div className="btn-top d-none d-md-flex">
                            <Link onClick={() => checkout()} className="first" to="/">تسویه حساب</Link>
                            <Link className="second" to="/">ادامه خرید</Link>
                        </div>
                    </div>
                    <div className="container carts">
                        <thead className='w-100 d-none d-md-block'>
                            <tr className="top-table">
                                <th className="col-3">تصویر</th>
                                <th className="col-3">نام</th>
                                <th className="col-2">سایز</th>
                                <th className="col-2">قیمت(تومان)</th>
                                <th className="col-1">تعداد</th>
                                <th className="col-1">حذف</th>
                            </tr>
                        </thead>
                        <div className="divider d-md-none"></div>
                        <div className="row">

                            {products.map((data) => {
                                return <CartItem data={data} deleteItem={deleteFromCart} />
                            })}
                        </div>
                    </div>
                    <div className="container my-5 py-md-5">
                        <div className="checkout col-12 col-md-4">
                            <div className="checkout-item">
                                <p>جمع سفارش:</p>
                                <p>{formatter.format(total)}  تومان</p>
                            </div>
                            <div className="checkout-item">
                                <p>هزینه ارسال:</p>
                                <p>--</p>
                            </div>
                            <div className="divider"></div>
                            <div className="checkout-item">
                                <p>مبلغ کل:</p>
                                <p>{formatter.format(total)} تومان</p>
                            </div>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="container btns">
                        <div className="btn-top">
                            <Link onClick={() => checkout()} className="first">تسویه حساب</Link>

                            <Link className="second" to="/">ادامه خرید</Link>
                        </div>
                    </div>
                </>
                : <>
                    <div className="empty-container">
                        <div className="container">
                            <div className="title">
                                <h3>.هنوز چیزی انتخاب نکرده اید</h3>
                            </div>
                            <div className="back-btn">
                                <Link to="/">بازگشت به فروشگاه</Link>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}
const getCartProducts = state => {
    console.log(state);
    return state.cart.addedIds.map(id => ({
        ...state.products[id],
        quantity: (state.cart.quantityById[id] || 0)
    }))
}
const getTotal = state => state.cart.addedIds.reduce((total, id) => total + state.products[id].afterprice * (state.cart.quantityById[id] || 0), 0).toFixed(2)
const mapStateToProps = state => ({
    products: getCartProducts(state),
    total: getTotal(state),
})

const mapDispatchToProps = dispatch => ({
    checkout: () => dispatch(checkout()),
    deleteFromCart: (productId) => dispatch(deleteFromCart(productId))
}
)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);