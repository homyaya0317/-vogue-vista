import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListener,signOutUser,createUserDocumentFromAuth } from "../utils/firebase/firebase.component";




export const UserContext = createContext({
    currentUser:null,

    setCurrentUser:()=>null

})


//使得下面的children都有权限 获得currentUser 和setCurrentUser
export const UserProvider = ({children}) =>{

    const [currentUser, setCurrentUser] = useState(null)
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


