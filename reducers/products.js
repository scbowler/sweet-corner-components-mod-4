import types from 'actions/types';

const DEFAULT_STATE = {
    list: [],
    details: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_PRODUCT_DETAILS:
            return { ...state, details: action.product };
        case types.GET_PRODUCT_LIST:
            return { ...state, list: action.products };
        default:
            return state;
    }
};
