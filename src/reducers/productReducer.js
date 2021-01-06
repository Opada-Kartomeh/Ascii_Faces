import { GET_PREEMPTiIVELY, NEXTPAGE, GET_PRODUCTS, SET_LOADING, SET_LOADINGDATAFINISHED,ERROR_PRODUCTS } from '../actions/types'

const initialState = {
    products: [],
    prevProduct: [],
    page: 1,
    loading: false,
    isFinished: false,
    isFinishedLoad: false,
    errorProducts:"",
}

const Reducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_PRODUCTS:
            let nextProducts = state.products;
            let newElements = state.prevProduct.slice(0, 10);
            let restElement = state.prevProduct;
            restElement.splice(0, 10);
            nextProducts = [...nextProducts, ...newElements];
            return {
                ...state,
                products: nextProducts,
                prevProduct: restElement,
                isFinished: nextProducts.length === 500 ? true : false,
            };
        case GET_PREEMPTiIVELY:
            let preemPtively = state.prevProduct;
            preemPtively = [...preemPtively, ...action.data];

            return {
                ...state,
                prevProduct: preemPtively,
            };
        case NEXTPAGE:

            let prevPage = state.page;
            return { ...state, page: prevPage + 1 };
        case SET_LOADING:
            let prevLoading = state.loading;
            return { ...state, loading: !prevLoading }
        case SET_LOADINGDATAFINISHED:
            return { ...state, isFinishedLoad: true }
        case ERROR_PRODUCTS:
            return { ...state,errorProducts:action.data}
        default:
            return state;
    }
}
export default Reducers;
