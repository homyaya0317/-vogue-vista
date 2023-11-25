import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { ReactComponent as Logo } from "../../assets/086 crown.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"


import { selectIsCartOpen } from "../../store/cart/cart.selector"

import { selectCurrentUser } from "../../store/user/user.selector"

import {NavigationContainer,NavLinks,NavLink,LogoContainer} from "./navigation.styles"
import { signOutUser } from "../../utils/firebase/firebase.component"



const Navigation = () => {

  // const { currentUser,setCurrentUser } = useContext(UserContext)
  // console.log(currentUser);

  // const currentUser = useSelector((state)=> state.user.currentUser)

  const currentUser = useSelector(selectCurrentUser)

  const isCartOpen = useSelector(selectIsCartOpen)


  return (
    <Fragment>
      <NavigationContainer>

        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>

        <NavLinks >
          <NavLink to="/shop">
            SHOP
          </NavLink>

          {
            currentUser ?
              <NavLink as="span" onClick={signOutUser }>SIGN OUT</NavLink>
              :
              <NavLink to="/auth">
                Sign in
              </NavLink>
          }
         <CartIcon/>
        </NavLinks>

        {isCartOpen &&  <CartDropdown/>}

      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation