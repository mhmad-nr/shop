import { combineReducers  } from "redux";
import products from "./reducer";
import cart from "./cart";

export default combineReducers({
    cart,
    products
});

