import {Store, createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware()
const store: Store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store;
