import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, updateDisplayName, signInWithGooglePopup, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.component"

import "./sign-in-form.styles.scss"



const defaultFormFields = {
    email: "",
    password: "",

}


const SignInForm = () => {


    const [formFields, setFormFields] = useState(defaultFormFields)

    const { email, password } = formFields //destructiing 

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }



    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user) // createUserDocumentFromAuth() 是async方法，返回的userDocRef是promise

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await signInAuthWithEmailAndPassword(email,password)
            console.log(response);
            resetFormFields()

        } catch (error) {
            switch(error.code){
                case "auth/invalid-login-credentials":
                    alert("incorrect password for email or no user associated with this email")
                    break
                default:
                    console.log(error);
            }
         

        }
    }

    const handleChange = (event) => {

        //event.target 是整个元素对象，比如： <input  type="text" required onChange={handleChange} name="displayName" value={displayName}/>

        const { name, value } = event.target //解构赋值 [name]就是指向属性名的变量这里就是 displayName, [属性名]:属性值

        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <div className="sign-up-container">

            <h2>Already have a account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label="email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google sign in</Button>

                </div>


            </form>





        </div>
    )
}

export default SignInForm