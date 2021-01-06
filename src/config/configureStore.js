import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk  from 'redux-thunk'
import reducers from '../reducers/index';
 const  configureStore=()=>{
    const rootReducer =combineReducers({
        ...reducers
    })
    return createStore(rootReducer,applyMiddleware(ReduxThunk))

}
export default configureStore