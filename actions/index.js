import axios from 'axios';
import types from './types';

export const getProductDetails = id => async dispatch => {
    try {
        const { data: { product } } = await axios.get(`/api/get-product-details.php?product-id=${id}`);

        dispatch({
            type: types.GET_PRODUCT_DETAILS,
            product
        });
    } catch(err){
        console.log('Error getting product details:', err.message);
    }
}

export const getProductList = () => async dispatch => {
    try {
        const { data: { products } } = await axios.get('/api/get-product-list.php');

        dispatch({
            type: types.GET_PRODUCT_LIST,
            products
        });
    } catch(err){
        console.log('Error getting product list:', err.message);
    }
}
