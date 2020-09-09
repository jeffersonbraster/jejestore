import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_DETAILS_FAILURE, 
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAILURE,
    PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_FAILURE, PRODUCT_DELETE_SUCCESS } from '../constants/productContants';
import Axios from 'axios';

const listProducts = () => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await Axios.get('/api/products');
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch (err) {
        dispatch({type: PRODUCT_LIST_FAILURE, payload: err.menssage});
    }
}

const saveProduct = (product) => async(dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_SAVE_REQUEST, payload: product});
        const {userSignin: {userInfo}} = getState();

        if(!product._id) {
            const {data} = await Axios.post('/api/products', product, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data});
        } else {
            const {data} = await Axios.put('/api/products/' + product._id, product, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data});
        }  
   
    } catch (error) {
        dispatch({type: PRODUCT_SAVE_FAILURE, payload: error.message});
    }
}

const detailsProduct = (productId) => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST, paylod: productId});
        const {data} = await Axios.get('/api/products/' + productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch (err) {
        dispatch({type: PRODUCT_DETAILS_FAILURE, payload: err.menssage});
        
    }
}

const deleteProduct = (productId) => async(dispatch,getState) => {
    try {
        const {userSignin: {userInfo}} = getState();
        dispatch({type: PRODUCT_DELETE_REQUEST, paylod: productId});
        const {data} = await Axios.delete('/api/products/' + productId, {
            headers: {
                'Authorization': 'Bearer ' + userInfo.token
            }
        });
        dispatch({type: PRODUCT_DELETE_SUCCESS, payload: data, success: true});
    } catch (err) {
        dispatch({type: PRODUCT_DELETE_FAILURE, payload: err.menssage});
        
    }
}

export {listProducts, detailsProduct, saveProduct, deleteProduct}