import Home from "./routes/home/home.component"
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { onAuthStateChangedListener,getCurrentUser } from "./utils/firebase/firebase.component";
import { checkUserSession } from "./store/user/user.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


import { createUserDocumentFromAuth } from "./utils/firebase/firebase.component";
import { setCurrentUser } from "./store/user/user.action";



const App = () => {

  const dispatch = useDispatch()


      
//   useEffect(()=>{

//     //onAuthStateChangedListener: firebase 提供的 自动检测state的变化
//     const unsubscribe =  onAuthStateChangedListener((user)=>{
        
//             if(user){
//              createUserDocumentFromAuth(user) //这个方法会判断user有没有存在在数据库中，参看firebase component
//             }
//             dispatch(setCurrentUser(user))
//     })

//     return unsubscribe

//  },[])


useEffect(()=>{
  // getCurrentUser()
  dispatch(checkUserSession())

},[])


 



  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="auth" element={<Authentication />} />  
        <Route path="checkout" element={<Checkout/>} />
      </Route>

    </Routes>
  )
}

export default App;
