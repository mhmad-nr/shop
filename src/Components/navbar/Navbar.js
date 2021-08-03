import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import like2 from "../../image/navbar/navbar-top/like2.svg";
import like1 from "../../image/navbar/navbar-top/like1.svg";
import profile1 from "../../image/navbar/navbar-top/profile1.svg";
import profile2 from "../../image/navbar/navbar-top/profile2.svg";
import brand from "../../image/navbar/navbar-top/brand.svg";
import iconshopcard1 from "../../image/navbar/navbar-top/iconshopcard1.svg"
import iconshopcard2 from "../../image/navbar/navbar-top/iconshopcard2.svg";
import { connect } from "react-redux";
const Navbar = (props) => {
    const count = props.count
    const [like, setLike] = useState(false)
    const [pro, setPro] = useState(false)
    const [shop, setShop] = useState(false)
    const [slide, setSlide] = useState(false)
    const [navslide, setNavslide] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                setNavslide(true)
            } else {
                setNavslide(false)
            }
        })
    }, [])
    return (
        <>
            <div className={navslide ? "top-navbar navtop" : "top-navbar "}>
                <div className=" container-lg py-2 py-lg-4">
                    <div className="top-container ">
                        <div className="left d-none d-lg-block col-md-4 col-sm-3">
                            <ul>
                                <li onMouseMove={() => setLike(true)} onMouseOut={() => setLike(false)}  >
                                    <Link to="/">
                                        <img className="img-one" alt="img" src={like ? like2 : like1} />
                                    </Link>
                                </li>
                                <li onMouseMove={() => setPro(true)} onMouseOut={() => setPro(false)} >
                                    <Link to="/">
                                        <img className="img-one" alt="img" src={pro ? profile2 : profile1} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="center dfjccaic col-md-4 col-sm-3">
                            <Link className="brand-link" to="/">
                                <span className="span-first spans">
                                    tag
                                </span>
                                <span className="span-second spans">
                                    mond
                                </span>
                                <span className="span-i"></span>
                                <span className="spans">
                                    <img src={brand} alt="brand" />
                                </span>
                            </Link>
                        </div>
                        <div className="right col-md-4 col-sm-3">
                            <ul className="dfjccaic">
                                <li onMouseMove={() => setShop(true)} onMouseOut={() => setShop(false)}>
                                    <Link className="shop-card" to="/cart">
                                        <img className="img" src={shop ? iconshopcard2 : iconshopcard1} alt="img" />
                                        <span className={count === 0 ? "d-none" : ''}>{count}</span>
                                    </Link>
                                </li>
                                <li className="close">
                                    <i class="fas fa-search"></i>
                                </li>
                                <li onClick={() => { setSlide(true) }} className="menu-container">
                                    <div className="menu-item menu-item-one"></div>
                                    <div className="menu-item menu-item-two"></div>
                                    <div className="menu-item menu-item-three"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={navslide ? "buttom-navbar-container d-lg-block  navbuttom" : "buttom-navbar-container d-lg-block "} >
                <div className="container">
                    <ul className={slide ? "main-navbar-open main-navbar" : "main-navbar"}>
                        <li onClick={() => setSlide(false)} className="navbar-items close d-lg-none"><i class="fas fa-times"></i></li>
                        <li className="navbar-items">
                            <Link className="navbar-items-links navbar-items-links-focos" to="/shop">
                                مردانه
                            </Link>
                            <ul class="cd-secondary-nav p-5">
                                <li class="all-product"><Link to="/shop">همه محصولات مردانه</Link></li>
                                <li class="has-children col-1">
                                    <Link to="/shop">لباس</Link>
                                    <ul class="is-hidden">
                                        <li><Link Link to="/shop">تی شرت و پولوشرت</Link></li>
                                        <li><Link Link to="/shop">شلوار و شوارک</Link></li>
                                        <li><Link Link to="/shop">سویی‌شرت و بافت</Link></li>
                                        <li><Link Link to="/shop">پیراهن</Link></li>
                                        <li><Link Link to="/shop">کاپشن و کت</Link></li>
                                        <li><Link Link to="/shop">جوراب</Link></li>
                                        <li><Link Link to="/shop">تاپ</Link></li>
                                        <li><Link Link to="/shop">لباس زیر</Link></li>
                                        <li><Link Link to="/shop">پالتو و بارانی</Link></li>
                                        <li><Link Link to="/shop">لباس خواب</Link></li>
                                        <li><Link Link to="/shop">مانتو و سارافون</Link></li>
                                        <li><Link Link to="/shop">لباس کار</Link></li>
                                        <li><Link Link to="/shop">ست لباس</Link></li>
                                    </ul>
                                </li>
                                <li class="has-children col-1">
                                    <Link to="/shop">کفش</Link>
                                    <ul class="is-hidden">
                                        <li><Link to="/shop">کتانی</Link></li>
                                        <li><Link to="/shop">کفش ورزشی</Link></li>
                                        <li><Link to="/shop">بوت و نیم بوت</Link></li>
                                        <li><Link to="/shop">صندل</Link></li>
                                        <li><Link to="/shop">کفش راحتی</Link></li>
                                        <li><Link to="/shop">کفش رسمی</Link></li>
                                        <li><Link to="/shop">لوازم جانبی و مراقبتی کفش</Link></li>
                                        <li><Link to="/shop">کالج</Link></li>
                                    </ul>
                                </li>
                                <li class="has-children col-1">
                                    <Link to="/shop">کیف</Link>
                                    <ul class="is-hidden">
                                        <li><Link to="/shop">کوله پشتی</Link></li>
                                        <li><Link to="/shop">کیف پول و جاکارتی</Link></li>
                                        <li><Link to="/shop">کیف رودوشی</Link></li>
                                        <li><Link to="/shop">کیف پستچی</Link></li>
                                        <li><Link to="/shop">ساک مسافرتی</Link></li>
                                        <li><Link to="/shop">کیف دستی</Link></li>
                                        <li><Link to="/shop">کیف ورزشی</Link></li>
                                        <li><Link to="/shop">کیف کمری</Link></li>
                                        <li><Link to="/shop">کیف لوازم پیرایش</Link></li>
                                        <li><Link to="/shop">کیف لوازم جانبی</Link></li>
                                    </ul>
                                </li>
                                <li class="has-children col-1">
                                    <Link to="/shop">اکسسوری</Link>
                                    <ul class="is-hidden">
                                        <li><Link to="/shop">کلاه</Link></li>
                                        <li><Link to="/shop">زیورآلات</Link></li>
                                        <li><Link to="/shop">ساعت</Link></li>
                                        <li><Link to="/shop">عینک</Link></li>
                                        <li><Link to="/shop">کمربند</Link></li>
                                        <li><Link to="/shop">دستکش</Link></li>
                                        <li><Link to="/shop">شال و روسری</Link></li>
                                        <li><Link to="/shop">هد بند و مچ بند ورزشی</Link></li>
                                        <li><Link to="/shop">فندک</Link></li>
                                        <li><Link to="/shop">قاب</Link></li>
                                        <li><Link to="/shop">کراوات/پاپیون</Link></li>
                                        <li><Link to="/shop">بند ساعت</Link></li>
                                    </ul>
                                </li>
                                <li class="has-children col-1">
                                    <Link to="/shop">زیبایی و سلامت</Link>
                                    <ul class="is-hidden">
                                        <li><Link to="/shop">عطر و ادوکلن</Link></li>
                                        <li><Link to="/shop">کیف لوازم آرایش</Link></li>
                                        <li><Link to="/shop">ماسک</Link></li>
                                        <li><Link to="/shop">اصلاح</Link></li>
                                        <li><Link to="/shop">حالت دهنده مو</Link></li>
                                    </ul>
                                </li>
                                <li class="has-children col-1">
                                    <Link to="/shop">کارت</Link>
                                    <ul class="is-hidden">
                                        <li><Link to="/shop"> 100 هزاری</Link></li>
                                        <li><Link to="/shop"> 200 هزاری</Link></li>
                                        <li><Link to="/shop"> 500 هزاری</Link></li>
                                        <li><Link to="/shop"> 750 هزاری</Link></li>
                                        <li><Link to="/shop"> 1 میلیونی</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="navbar-items">
                            <Link className="navbar-items-links navbar-items-links-focos" to="/shop">
                                زنانه
                            </Link>
                            <ul class="cd-secondary-nav p-5">
                                <li class="all-product"><Link to="/shop">همه محصولات زنانه</Link></li>
                                <li class="has-children col-1">
                                    <Link to="/shop">لباس</Link>
                                    <ul class="is-hidden">
                                        <li><Link Link to="/shop">تی شرت و پولوشرت</Link></li>
                                        <li><Link Link to="/shop">شلوار و شوارک</Link></li>
                                        <li><Link Link to="/shop">سویی‌شرت و بافت</Link></li>
                                        <li><Link Link to="/shop">پیراهن</Link></li>
                                        <li><Link Link to="/shop">کاپشن و کت</Link></li>
                                        <li><Link Link to="/shop">جوراب</Link></li>
                                        <li><Link Link to="/shop">تاپ</Link></li>
                                        <li><Link Link to="/shop">لباس زیر</Link></li>
                                        <li><Link Link to="/shop">پالتو و بارانی</Link></li>
                                        <li><Link Link to="/shop">لباس خواب</Link></li>
                                        <li><Link Link to="/shop">مانتو و سارافون</Link></li>
                                        <li><Link Link to="/shop">لباس کار</Link></li>
                                        <li><Link Link to="/shop">ست لباس</Link></li>
                                    </ul>
                                </li>
                                <li class="has-children col-1">
                                    <Link to="/shop">کفش</Link>
                                    <ul class="is-hidden">
                                        <li><Link to="/shop">کتانی</Link></li>
                                        <li><Link to="/shop">کفش ورزشی</Link></li>
                                        <li><Link to="/shop">بوت و نیم بوت</Link></li>
                                        <li><Link to="/shop">صندل</Link></li>
                                        <li><Link to="/shop">کفش راحتی</Link></li>
                                        <li><Link to="/shop">کفش رسمی</Link></li>
                                        <li><Link to="/shop">لوازم جانبی و مراقبتی کفش</Link></li>
                                        <li><Link to="/shop">کالج</Link></li>
                                    </ul>
                                </li>
                                <li class="has-children col-1">
                                    <Link to="/shop">کیف</Link>
                                    <ul class="is-hidden">
                                        <li><Link to="/shop">کوله پشتی</Link></li>
                                        <li><Link to="/shop">کیف پول و جاکارتی</Link></li>
                                        <li><Link to="/shop">کیف رودوشی</Link></li>
                                        <li><Link to="/shop">کیف پستچی</Link></li>
                                        <li><Link to="/shop">ساک مسافرتی</Link></li>
                                        <li><Link to="/shop">کیف دستی</Link></li>
                                        <li><Link to="/shop">کیف ورزشی</Link></li>
                                        <li><Link to="/shop">کیف کمری</Link></li>
                                        <li><Link to="/shop">کیف لوازم پیرایش</Link></li>
                                        <li><Link to="/shop">کیف لوازم جانبی</Link></li>
                                    </ul>
                                </li>
                                <li class="has-children col-1">
                                    <Link to="/shop">اکسسوری</Link>
                                    <ul class="is-hidden">
                                        <li><Link to="/shop">کلاه</Link></li>
                                        <li><Link to="/shop">زیورآلات</Link></li>
                                        <li><Link to="/shop">ساعت</Link></li>
                                        <li><Link to="/shop">عینک</Link></li>
                                        <li><Link to="/shop">کمربند</Link></li>
                                        <li><Link to="/shop">دستکش</Link></li>
                                        <li><Link to="/shop">شال و روسری</Link></li>
                                        <li><Link to="/shop">هد بند و مچ بند ورزشی</Link></li>
                                        <li><Link to="/shop">فندک</Link></li>
                                        <li><Link to="/shop">قاب</Link></li>
                                        <li><Link to="/shop">کراوات/پاپیون</Link></li>
                                        <li><Link to="/shop">بند ساعت</Link></li>
                                    </ul>
                                </li>
                                <li class="has-children col-1">
                                    <Link to="/shop">زیبایی و سلامت</Link>
                                    <ul class="is-hidden">
                                        <li><Link to="/shop">عطر و ادوکلن</Link></li>
                                        <li><Link to="/shop">کیف لوازم آرایش</Link></li>
                                        <li><Link to="/shop">ماسک</Link></li>
                                        <li><Link to="/shop">اصلاح</Link></li>
                                        <li><Link to="/shop">حالت دهنده مو</Link></li>
                                    </ul>
                                </li>
                                <li class="has-children col-1">
                                    <Link to="/shop">کارت</Link>
                                    <ul class="is-hidden">
                                        <li><Link to="/shop"> 100 هزاری</Link></li>
                                        <li><Link to="/shop"> 200 هزاری</Link></li>
                                        <li><Link to="/shop"> 500 هزاری</Link></li>
                                        <li><Link to="/shop"> 750 هزاری</Link></li>
                                        <li><Link to="/shop"> 1 میلیونی</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="navbar-items">
                            <Link className="navbar-items-links" to="/shop">بچگانه</Link>
                        </li>
                        <li className="navbar-items">
                            <Link className="navbar-items-links" to="/shop">ورزشی</Link>
                        </li>
                        <li className="navbar-items">
                            <Link className="navbar-items-links" to="/shop">زیبایی وسلامت</Link>
                        </li>
                        <li className="navbar-items">
                            <Link className="navbar-items-links" to="/shop">خانه وآشپزخانه</Link>
                        </li>
                        <li className="navbar-items">
                            <Link className="navbar-items-links" to="/shop">برند ها</Link>
                        </li>
                        <li className="navbar-items">
                            <Link className="navbar-items-links" to="/shop">کارت هدیه</Link>
                        </li>
                        <li className="navbar-items">
                            <Link className="navbar-items-links" to="/shop">مجله مد</Link>
                        </li>
                        <li className="d-lg-none login">
                            <i class="fas fa-user"></i>
                            <span className="mx-2">ورود</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    count: state.cart.addedIds.length
})
export default connect(mapStateToProps)(Navbar);