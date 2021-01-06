import  {SET_ADS,DELETE_ADS,ERROR_ADS} from '../actions/types'
const initialState = {
     adsSrc:"",
     errorAds:"",
     visit:new Map(),
}


const Reducers = (state = initialState, action) => {
    switch (action.type) {

     case SET_ADS:
       state.visit[action.data.vis]=true;
      return {...state,adsSrc: action.data.src};
     case DELETE_ADS:
      return {...state,adsSrc:""};
     case ERROR_ADS:
      return {...state,errorAds:action.data}
    default:
        return state;
    }

}

export default Reducers;
