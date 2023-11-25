// import { SpinnerContainer,SpinnerOverlay } from "./spinner.styles";


//  const Spinner = () =>{
//     return(

//         <SpinnerContainer>
//             <SpinnerOverlay/>
//         </SpinnerContainer>
//     )
// }

// export default Spinner


import { SpinnerOverlay, SpinnerContainer } from './spinner.styles';

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;