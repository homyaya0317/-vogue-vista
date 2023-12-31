
import  {takeLatest,all,call,put} from "redux-saga/effects"

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.component"

import { fetchCategoriesFailed,fetchCategoriesSuccess } from "./categories.action"

import { CATEGORIES_ACTION_TYPES } from "./categories.types"





export function* fetchCategoriesAsync() {

    try{
        const categoriesArray = yield call (getCategoriesAndDocuments, "categories")

        yield put(fetchCategoriesSuccess(categoriesArray))

    }catch(error){
       yield put(fetchCategoriesFailed(error))

    }

}


// whenever the FETCH_CATEGORIES_START action is dispatched, fetchCategoriesAsync will be invoked.

export function* onFetchcategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync)

}

export  function* categoriesSaga(){
    yield all([call(onFetchcategories)])

}