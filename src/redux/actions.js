import * as types from "./consts";

export const receiveProducts = products => ({
        type : types.RECEIVE_PRODUCTS ,
        products
    })

export const addToCart = productid => ({
        type : types.ADD_TO_CART ,
        productid
})
export const deleteFromCart = productid => ({
        type : types.DELETE_FROM_CART ,
        productid
})
export const checkout = () => ({
        type : types.CHECKOUT_REQUEST
    })
