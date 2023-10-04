import {all} from 'redux-saga/effects'
import { watchNextProduct, watchPrevProduct, watchSearchProduct } from './saga'

export default function* rootSaga(){
    yield all([watchNextProduct(), watchPrevProduct(), watchSearchProduct()])
}