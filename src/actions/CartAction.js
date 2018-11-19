export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export function addToCart({ _id, name, price, quantity }) {
    quantity = 1;
    return {
        type: ADD_TO_CART,
        params: { _id, name, price, quantity }
    }
}

export function deleteItem({ _id }) {
    return {
        type: DELETE_ITEM,
        params: { _id }
    }
}

export function updateQuantity({ _id, quantity }) {
    return {
        type: UPDATE_QUANTITY,
        params: { _id, quantity }
    }
}