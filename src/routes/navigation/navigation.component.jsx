import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { ReactComponent as Logo } from "../../assets/shopping-logo-svgrepo-com.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"


import { selectIsCartOpen } from "../../store/cart/cart.selector"

import { selectCurrentUser } from "../../store/user/user.selector"

import { 
  NavigationContainer, 
  NavLinks, 
  CurrentUser, 
  NavLink,
   LogoContainer,
    CategoryNavigationContainer, 
    CategoryNavLink,
  InfoContainer,
InfoSection } from "./navigation.styles"
// import { signOutUser } from "../../utils/firebase/firebase.component"
import { useDispatch } from "react-redux"
import { signOutStart } from "../../store/user/user.action"



const Navigation = () => {

  // const { currentUser,setCurrentUser } = useContext(UserContext)
  // console.log(currentUser);

  // const currentUser = useSelector((state)=> state.user.currentUser)
  const dispatch = useDispatch()

  const currentUser = useSelector(selectCurrentUser)

  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutUser = () => {
    dispatch(signOutStart())
  }


  return (
    <Fragment>
      <NavigationContainer>

        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>

        <NavLinks >

          {

            currentUser ? <CurrentUser>{`Welcome ${currentUser.displayName}`}</CurrentUser> : null
          }



          {
            currentUser ?
              <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
              :
              <NavLink to="/auth">
                Sign in/Sign up
              </NavLink>
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}


      </NavigationContainer>


      <CategoryNavigationContainer>
        <NavLinks>
          <CategoryNavLink to="/">Home</CategoryNavLink>
          <CategoryNavLink to="/categories">Categories</CategoryNavLink>
          <CategoryNavLink to="/categories/hats">Hats</CategoryNavLink>
          <CategoryNavLink to="categories/jackets">Jackets</CategoryNavLink>
          <CategoryNavLink to="/categories/sneakers">Sneakers</CategoryNavLink>
          <CategoryNavLink to="/categories/mens">Mens</CategoryNavLink>
          <CategoryNavLink to="/categories/womens">Womens</CategoryNavLink>
        </NavLinks>

      </CategoryNavigationContainer>
      <Outlet />


      <InfoContainer>

        <InfoSection>

          <h2>About us </h2>

          <h4>About Vouge-Vista</h4>
          <h4>News </h4>
          <h4>Help </h4>
          
        </InfoSection>

        <InfoSection>
          <h2>Services</h2>
          <h4>Shop</h4>
          <h4>Services Login </h4>
          <h4>Service Checkout </h4>
          
        </InfoSection>

        <InfoSection>
          <h2>Contact Info</h2>
          <h4>Address: 1234 Dr, Vogue-Vista building </h4>
          <h4>Phone: 0123456789 </h4>
          <h4>Email: vogue_vista@example.com </h4>
      
        </InfoSection>

      </InfoContainer>



    </Fragment>
  )
}

export default Navigation