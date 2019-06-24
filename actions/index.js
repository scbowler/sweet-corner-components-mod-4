import axios from 'axios';
import types from './types';

export const getProductList = () => async dispatch => {
    try {
        const resp = await axios.get('/api/get-product-list.php');

        dispatch({
            type: types.GET_PRODUCT_LIST,
            products: resp.data.products
        });
    } catch(err){
        console.log('Error getting product list:', err.message);
    }
}
