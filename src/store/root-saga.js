import {all,call} from "redux-saga/effects"
import {categoriesSaga} from "../store/categories/catergories.saga"


export function*  rootSaga(){

    yield all([call(categoriesSaga)])

}