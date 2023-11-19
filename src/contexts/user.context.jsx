import { createContext,useEffect,useReducer } from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.component";
import { createAction } from "../utils/reducer/reducer.utils";


export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null

})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER :"SET_CURRENT_USER"
}


const INITIAL_STATE = {
    currentUser:null
}


const userReducer = (state,action) => {

  

    const {type,payload} = action

    switch(type){

        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:payload
            }

        default:
            throw new Error(`unhandled type ${type} in userReucer`)
    }

}





//使得下面的children都有权限 获得currentUser 和setCurrentUser
export const UserProvider = ({children}) =>{


    const[ {currentUser},dispatch] = useReducer(userReducer, INITIAL_STATE)
    

    const setCurrentUser = (user) =>{
        dispatch(

            createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)
    
        )
    }


    const value = {currentUser,setCurrentUser}


    
    useEffect(()=>{

       //onAuthStateChangedListener: firebase 提供的 自动检测state的变化
       const unsubscribe =  onAuthStateChangedListener((user)=>{
        
               setCurrentUser(user)
               if(user){
                createUserDocumentFromAuth(user) //这个方法会判断user有没有存在在数据库中，参看firebase component
               }
       })

       return unsubscribe

    },[])

    return<UserContext.Provider value={value}>
        {children}

     </UserContext.Provider>
}


