import React from 'react'
import { Link } from "react-router-dom";
import imggoogle from "../../image/footer/google.png";
import imgappel from "../../image/footer/appel.png";
import imgmyket from "../../image/footer/myket.png";
import imgsibapp from "../../image/footer/sibapp.jpg";
import imgetehadie from "../../image/footer/footerbuttom/etehadie.png";
import imgnemad from "../../image/footer/footerbuttom/nemad.png";
import imgneshan from "../../image/footer/footerbuttom/neshan.png";
import imgswnfi from "../../image/footer/footerbuttom/swnfi.png";

const Footer = () => {
    return (
        <>
            <div className="container footer-conteiner py-5">
                <div className="footer-first col-12 my-4  col-md-4">
                    <div className="col-5 img-container">
                        <div ><Link to="/"> <img alt="footerimg " className="imgs footer-top" src={imggoogle} /></Link></div>
                        <div ><Link to="/"><img alt="footerimg" className="imgs" src={imgappel} /></Link></div>
                    </div>
                    <div className="col-5  img-container offset-1">
                        <div ><Link to="/"><img alt="footerimg" className="imgs footer-top" src={imgsibapp} /></Link></div>
                        <div ><Link to="/"><img alt="footerimg" className="imgs" src={imgmyket} /></Link></div>
                    </div>
                    <div className="col-12 mt-2 footer-icons">
                        <Link to="/"><i class="fab fa-facebook-f"></i></Link>
                        <Link to="/"><i class="fab fa-twitter"></i></Link>
                        <Link to="/"><i class="fab fa-instagram"></i></Link>
                        <Link to="/"><i class="fab fa-telegram"></i></Link>
                    </div>
                    <div className="col-12 footer-title px-3">

                        <h2>خبرنامه</h2>
                        <p>
                            برای دریافت آخرین اخبار و تخفیف های برندها به خبرنامه ما بپیوندید.
                        </p>
                    </div>
                    <div className="footer-email col-12">
                        <input type="email" />
                        <button>ثبت نام</button>
                    </div>


                </div>
                <div className="col-md-7 mt-3 m-md-0 footer-second col-12 offset-md-1">
                    <div className="col-12 py-2 py-md-0 px-3 px-md-0  row">
                        <div className="col-6 top">
                            <h3>خدمات مشتریان</h3>
                            <Link to="/"><p className="parag">شرایط استفاده</p></Link>
                            <Link to="/"><p className="parag">پاسخ به پرسش‌های متداول</p></Link>
                            <Link to="/"><p className="parag">پشتیبانی: 91005909-021</p></Link>
                        </div>
                        <div className="col-6 top">
                            <h3>اطلاعات تگموند</h3>
                            <Link to="/"><p className="parag">درباره ما</p></Link>
                            <Link to="/"><p className="parag">ارتباط با ما</p></Link>
                            <Link to="/"><p className="parag">مجله مد</p></Link>
                        </div>
                    </div>
                    <div className="col-12 mt-4 row footer-nemad">
                        <div className="col-md-6 col-12 footer-nemad">
                            <div className="col-5"><Link to="/"><img className="img-footer-buttom" alt="img-footerbuttom" src={imgnemad}/></Link></div>
                            <div className="col-5"><Link to="/"><img className="img-footer-buttom" alt="img-footerbuttom" src={imgswnfi}/></Link></div>
                        </div>
                        <div className="col-md-6 col-12 footer-nemad">
                            <div className="col-5"><Link to="/"><img className="img-footer-buttom" alt="img-footerbuttom" src={imgetehadie}/></Link></div>
                            <div className="col-5"><Link to="/"><img className="img-footer-buttom" alt="img-footerbuttom" src={imgneshan}/></Link></div>
                        </div>

                    </div>
                </div>
                <div className="col-12 footer-buttom container">
                    <p>Copyright © 2014 - 2021 | Designed & Developed by <Link to="/">TAGMOND Co</Link>. All rights reserved</p>
                </div>
            </div>
        </>
    )
}
export default Footer;