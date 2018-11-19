import {combineReducers} from 'redux';
import productReducer from "./ProductReducer";
import cartReducer from "./CartReducer";

export default combineReducers({
    products: productReducer,
    cart: cartReducer
});