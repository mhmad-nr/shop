import { RECEIVE_PRODUCTS , ADD_TO_CART } from "../consts";

const products = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS :
            return {
                    ...state,
                    ...action.products.reduce((obj , product) => {
                        obj[product.id] = product;
                        return obj;
                    }, {})
                }
        case ADD_TO_CART :
            let { productid } = action;
            let product = state[productid];
            return {
                ...state,
                [productid] : {
                    ...product,
                }
            }
        default:
            return state;
    }
}

export default products;