import {createSelector} from "reselect"



//state.categories is an object 
const selectCategoryReducer = (state) => state.categories



export const selectCategorie = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.categories
)

//categoriesSlice is an object that is   CATEGORIES_INITIAL_STATE
// export const CATEGORIES_INITIAL_STATE = {
    //     categories:[]
    // }

   // the return value of previous selector is the input of next selector
 


export const selectCategoriesMap = createSelector(
    [selectCategorie],// categories array 

    (categories) => categories.reduce(
        (acc,{title,items}) => {
            acc[title.toLowerCase()] = items;
            return acc
        },{})

    )

 
  
export const selectCategoriesIsLoading  = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)



