import React from 'react'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Breadcrumbs from "../../Breadcrumbs"
const Layout = (props) => {
    
    console.log(props);
    return (
        <>
            <nav className="navbar-layout-container">
                <Navbar />
            </nav>
            <div className="main-layout-container">
                <div className="main-layout mt-5">
               <Breadcrumbs/>
               
                  {props.children} 
                   
                    <footer className="mt-4 footer-layout-container ">
                        <Footer />
                    </footer>
                </div>
            </div>

        </>
    )
}
export default Layout;


