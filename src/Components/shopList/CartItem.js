import React from 'react';
import { Link } from "react-router-dom";

 const CartItem = (props) => {
     const {data, deleteItem} = props
     const formatter = new Intl.NumberFormat({
        minimumFractionDigits: 2
    })
    return (
        <ul className="cart-item col-12 col-sm-6 col-md-12">
           <li className="col-md-3 col-12"><Link to={`/shop/${data.name}`}><img alt="img" src={data.img1}/></Link></li> 
           <li className="col-md-3 col-6"><p className="d-md-none tag">نام:</p><p>{data.title}</p></li> 
           <li className="col-md-2 col-6"><p className="d-md-none tag">سایز:</p><p className="num">{data.size}</p></li> 
           <li className="col-md-2 col-6"><p className="d-md-none tag">قیمت:</p><p className="num">{formatter.format(data.afterprice)+"T"}  </p></li> 
           <li className="col-md-1 col-6"><p className="d-md-none tag">تعداد:</p><p className="num">1</p></li> 
           <li onClick={()=>deleteItem(data.id)} className="col-md-1 col-12"><i class="fas fa-times"></i></li> 
        </ul>
    )
}
export default CartItem;