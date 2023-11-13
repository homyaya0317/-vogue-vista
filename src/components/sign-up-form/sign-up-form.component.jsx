import { useState} from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, updateDisplayName } from "../../utils/firebase/firebase.component"

import FormInput from "../form-input/form-input.component"
import "./sign-up-form.styles.scss"
import Button from "../button/button.component"


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { displayName, email, password, confirmPassword } = formFields //destructiing 

   

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("password do not match")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

            await updateDisplayName(user, displayName)

            await createUserDocumentFromAuth(user, { displayName })

            resetFormFields()

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user,email already in use")
            } else {
                console.log("user creation encountered an error", error);
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
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    label="Display name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
             
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} 
                />

                
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} 
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                 />

                <Button   type="submit">Sign Up</Button>

            </form>

        </div>


    )
}

export default SignUpForm