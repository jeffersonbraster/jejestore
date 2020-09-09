
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_DETAILS_FAILURE, 
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_SAVE_FAILURE, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_REQUEST } from '../constants/productContants';

function productListReducer(state = {products:[]}, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAILURE:
            return{loading: false, error: action.payload};
        default:
            return state;
    }
}

function productDetailsReducer(state = {product: {} }, action) {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload};
        case PRODUCT_DETAILS_FAILURE:
            return{loading: false, error: action.payload};
        default:
            return state;
    }
}

function productSaveReducer(state = {product: {} }, action) {
    switch (action.type) {
        case PRODUCT_SAVE_REQUEST:
            return {loading: true};
        case PRODUCT_SAVE_SUCCESS:
            return {loading: false, success: true, product: action.payload};
        case PRODUCT_SAVE_FAILURE:
            return{loading: false, error: action.payload};
        default:
            return state;
    }
}

export {productListReducer, productDetailsReducer, productSaveReducer}