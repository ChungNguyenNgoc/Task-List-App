import {createStore, combineReducers, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import listReducer from './reducer/listReducer';
import notificationReducer from './reducer/notificationReducer';

const rootReducer = combineReducers({
    listRdr: listReducer,
    notification: notificationReducer,
});
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(),
);




export type RootState = ReturnType<typeof rootReducer>;

export default store;
