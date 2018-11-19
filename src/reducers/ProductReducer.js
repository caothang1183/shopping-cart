import { INIT_PRODUCTS } from '../actions/ProductAction';

export default function ProductReducer(state = [], action = {}) {
    switch (action.type) {
        case INIT_PRODUCTS:
            return action.params;
        default:
            return state;
    }
}