import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from '../constants/productContants';
import axios from 'axios';

const listProducts = () => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get('/api/products');
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch (err) {
        dispatch({type: PRODUCT_LIST_FAILURE, payload: err.menssage});
    }
}

const detailsProduct = (productId) => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST, paylod: productId});
        const {data} = await axios.get('/api/products/' + productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch (err) {
        dispatch({type: PRODUCT_DETAILS_FAILURE, payload: err.menssage});
        
    }
}

export {listProducts, detailsProduct}