import { ADD_TO_CART, DELETE_FROM_CART } from "../consts";
import { CHECKOUT_REQUEST } from "../consts";

const initialState = {
    addedIds : [],
    quantityById : {}
}

const addedIds = (state = initialState.addedIds, action) => {
    if (state.indexOf(action.productid) !== -1) {
        return state;
    }
    return [...state, action.productid];
}

const quantityByIds = (state = initialState.quantityById, action) => {
    const { productid } = action;
    return {
        ...state,
        [productid]: 1
    }
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return initialState;
        case ADD_TO_CART:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityByIds(state.quantityById, action)
            }
        case DELETE_FROM_CART:
            const { productid } = action;
            const { quantityById } = state;
            delete quantityById.productid;
            return {
                addedIds: state.addedIds.filter(id => id !== productid),
                quantityById ,   
            }
        default:
            return state;
    }
}


export default cart;