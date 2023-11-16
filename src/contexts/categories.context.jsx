import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.component.js";


export const CategoriesContext = createContext({
    categoriesMap: [],
   
})



export const  CategoriesProvider = ({children})=>{

    const [categoriesMap,setCategoriesMap] = useState({})

    useEffect(()=>{

        const getCategoriesMap = async()=>{
            const categoryMap = await getCategoriesAndDocuments()
           setCategoriesMap(categoryMap)

           //console.log(typeof(categoryMap));
           //console.log(categoryMap);
        }

         getCategoriesMap()
    },[])



    const value = {categoriesMap}


    return (
        <CategoriesContext.Provider value={value}>
            {children}

        </CategoriesContext.Provider>
    )
}