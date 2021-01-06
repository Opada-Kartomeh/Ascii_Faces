import { GET_PRODUCTS, NEXTPAGE, GET_PREEMPTiIVELY, SET_LOADING,SET_LOADINGDATAFINISHED,ERROR_PRODUCTS } from './types'
import api from '../api/api'
export const getProducts = (limit = 500, filter = null) => async (dispatch, getState) => {
    if (getState().products.loading === true)
        return;
    dispatch({ type: SET_LOADING })
    if (getState().products.prevProduct.length === 0) {
        await dispatch(getpreemptively(limit, filter));
    }
    dispatch({ type: GET_PRODUCTS })
    dispatch({ type: SET_LOADING })
}
export const getpreemptively = (limit = 500, filter = null) => async (dispatch, getState) => {
    let page = getState().products.page;
    dispatch({ type:ERROR_PRODUCTS,data:""})
    if(page>50)
     {
       dispatch({ type:SET_LOADINGDATAFINISHED})
       return; 
     }
    dispatch({ type: NEXTPAGE })
    try{
    let respone = await api.get(`products?_page=${page}&_limit=${limit}&_sort=${filter}`);
    dispatch({ type: GET_PREEMPTiIVELY, data: respone.data })
    } catch(err){
        console.log(err);
        dispatch({ type:ERROR_PRODUCTS,data:"Something went wrong"})
    }
    
}