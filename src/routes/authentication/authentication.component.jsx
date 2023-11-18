// import { 
//     // auth,
//     signInWithGooglePopup,
//     // signInWithGoogleRedirect,
//     createUserDocumentFromAuth} from "../../utils/firebase/firebase.component"
// import { useEffect } from "react"
// // import { getRedirectResult } from "firebase/auth"
// import { onAuthStateChanged } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import {AuthenticationContainer} from "./authentication.styles"

const Authentication = () => {



    //这个方法不可以了（课上讲的），因为Chrome may soon delete state for intermediate websites in a recent navigation chain

    // useEffect(()=>{

    //    const f = async () =>{    
    //            const response = await getRedirectResult(auth)
    //            console.log(response);   
    //     }

    //     f()   

    // },[])


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
    //       if (user) {
    //         // User is signed in
    //         const userDocRef = await createUserDocumentFromAuth(user);
    //         // Perform any additional actions based on the user or userDocRef
    //       } else {
    //         // User is signed out or authentication failed
    //       }
    //     });
    
    //     return () => unsubscribe(); // Cleanup the listener when the component unmounts
    //   }, []);




    //不能这样用
    //用这个signin方法和 signInWithGooglePopup有点区别，此时这个用户信息不打印在console，原因是当我们用这个sign in的时候， 页面跳转到一个新的页面，signin后回来就是重新启动整个application
    // const logGoogleRedirectUser = async() => {
    //     const {user} = await signInWithGoogleRedirect()
    //     // const userDocRef =  await createUserDocumentFromAuth(user) // createUserDocumentFromAuth() 是async方法，返回的userDocRef是promise
    //     console.log({user});

    // }



    return(
        <AuthenticationContainer>
            {/* <h1>sign in page</h1> */}
            <SignInForm/>
            {/* <button onClick={logGoogleUser}>Sign in with Google</button> */}
            {/* <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
           
            <SignUpForm/>
     


        </AuthenticationContainer>
    )
}

export default Authentication
