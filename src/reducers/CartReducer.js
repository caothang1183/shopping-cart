import { ADD_TO_CART, DELETE_ITEM, UPDATE_QUANTITY } from '../actions/CartAction';

export default function CartReducer(state = [], action = {}) {
    switch (action.type) {
        case ADD_TO_CART:
            let index = find(state, action.params._id);
            if (index !== -1) {
                state[index].quantity += 1;
                return state.concat([]);
            }
            return state.concat(action.params);

        case UPDATE_QUANTITY:
            let itemIndex = find(state, action.params._id);
            if (state[itemIndex].quantity === 0 && action.params.quantity === -1) {
                break;
            }
            state[itemIndex].quantity += action.params.quantity;
            return state.concat([]);

        case DELETE_ITEM:
            let indexDelete = find(state, action.params._id);
            console.log(action.params._id);
            return [...state.slice(0, indexDelete), ...state.slice(indexDelete + 1)];


        default:
            return state;
    }

    function find(products, id) {
        return products.findIndex((product) => product._id === id)
    }

    return state;
}