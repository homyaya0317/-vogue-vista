import React from "react"

import { ConfirmContainer,Text,Yes,No,ConfirmOuter } from "./confirm.styles"

const Confirm = (props) => {



    return (

        
            <ConfirmContainer  onClick={(e)=>props.onCancel(e)} >
                <Text >
                    {props.confirmText}
                </Text>


                <div>
                    <Yes  onClick={(e) => props.onYes(e)}>Yes</Yes>
                    <No  onClick={(e) => props.onCancel(e)}>Cancel</No>
                </div>
               
                  
               
            </ConfirmContainer>

    

    )
}

export default Confirm