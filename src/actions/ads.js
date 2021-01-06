import { SET_ADS, DELETE_ADS,ERROR_ADS} from './types'
import api from '../api/api'


export const getAds = () => async (dispatch,getState) => {
 
   dispatch({type:ERROR_ADS,data:""})
   let random=Math.floor(Math.random() * 1000);
   random %=10;
 
   if(getState().ads.visit[random]===true)
    return;
  try {
    let response = await api.get(`ads/?r=${random}`, { responseType: 'arraybuffer' });
    const base64 = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte),''));
    dispatch({ type: SET_ADS, data:{src:`data:;base64,${base64}`,vis:random} })
  }catch(err){
      dispatch({type:ERROR_ADS,data:"Something went wrong"})
  }
}

export const deleteAds = () => async (dispatch) => {
    dispatch({ type: DELETE_ADS })
}
