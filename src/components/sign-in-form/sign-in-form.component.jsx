import FormInput from "../form-input/form-input.component"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { useState, useEffect } from "react"
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles"
import { useDispatch } from "react-redux"
import { googleSignInStart, emailSigInStart } from "../../store/user/user.action"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"




const defaultFormFields = {
    email: "",
    password: "",

}


const SignInForm = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [formFields, setFormFields] = useState(defaultFormFields)

    const { email, password } = formFields //destructiing 
    


    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }



    const signInWithGoogle = async () => {

        dispatch(googleSignInStart())
        navigate("/")

    }



    const handleSubmit = async (event) => {
        event.preventDefault()
       
        dispatch(emailSigInStart(email, password));
        resetFormFields()
      
    }


    const error = useSelector((state) => state.user.error);

    useEffect(() => {
      if (error) { 
       
       alert("auth/invalid-login-credentials");

      }

      
    }, [error]);

    

    const handleChange = (event) => {

        const { name, value } = event.target 

        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <SignInContainer>

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

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>

                </ButtonsContainer>


            </form>





        </SignInContainer>
    )
}

export default SignInForm