/*

default button
inverted 

google sign in 


*/

import {BaseButton,GoogleSignInButton,InvertedButton,ButtonSpinner} from  "./button.styles"

export const BUTTON_TYPE_CLASSES = {
    base:"base",
    google: "google-sign-in",
    inverted:"inverted",

}


//object[属性]

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>(

    {
        [BUTTON_TYPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
    
    }[buttonType]

)

//对象的属性 

/*
对象
{[BUTTON_TYPE_CLASSES.base]:BaseButton,
[BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
[BUTTON_TYPE_CLASSES.inverted]:InvertedButton,}

*/


const Button = ({children,buttonType,isLoading,...otherProps}) => {

    const CustomButton = getButton(buttonType)

   

    return(
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading?  <ButtonSpinner/>: children}
        </CustomButton>
    )


}

export default Button