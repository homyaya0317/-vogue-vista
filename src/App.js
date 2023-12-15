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
import { signInWithEmail } from "./store/user/user.saga";
import { GlobalStyle } from './global.styles';

import { createUserDocumentFromAuth } from "./utils/firebase/firebase.component";
import { setCurrentUser } from "./store/user/user.action";



const App = () => {

  const dispatch = useDispatch()


useEffect(()=>{
  // getCurrentUser()
  dispatch(checkUserSession())

},[])


  return (
    <>

    <GlobalStyle/>
    <Routes>
      
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="categories/*" element={<Shop/>}/>
        <Route path="auth" element={<Authentication />} />  
        <Route path="checkout" element={<Checkout/>} />
      </Route>

    </Routes>
    </>
  )
}

export default App;
