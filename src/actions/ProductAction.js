export const INIT_PRODUCTS = 'INIT_PRODUCTS';

export function initProduct({ products }) {
    return {
        type: INIT_PRODUCTS,
        params: { products }
    }
}
