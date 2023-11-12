import { signInWithGooglePopup,createUserDocumentFromAuth} from "../../utils/firebase/firebase.component"



const SignIn = () => {

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup()

       const userDocRef =  await createUserDocumentFromAuth(user) // createUserDocumentFromAuth() 是async方法，返回的userDocRef是promise

    }

    return(
        <div>
            <h1>sign in page</h1>

            <button onClick={logGoogleUser}>Sign in with Google Popup</button>

        </div>
    )
}

export default SignIn
