import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk]; //array of thunks

const store = createStore(
  rootReducer,//all the reducers are brought here so we dont need an array
  initialState,
  compose(
    applyMiddleware(...middleware),//enhancers - data tranformations//helps in thunking --spread operator
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__())
  
);

export default store;
