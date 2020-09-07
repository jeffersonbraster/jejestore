import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from '../constants/productContants';
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

export {listProducts}