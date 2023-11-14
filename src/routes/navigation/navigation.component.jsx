import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as Logo } from "../../assets/086 crown.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"

import "./navigation.styles.scss"
import { signOutUser } from "../../utils/firebase/firebase.component"



const Navigation = () => {

  const { currentUser,setCurrentUser } = useContext(UserContext)
  // console.log(currentUser);

  const {isCartOpen} = useContext(CartContext)



  return (
    <Fragment>
      <div className="navigation">

        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {
            currentUser ?
              <span className="nav-link" onClick={signOutUser }>SIGN OUT</span>
              :
              <Link className="nav-link" to="/auth">
                Sign in
              </Link>

          }

         <CartIcon/>

      
        </div>

        {isCartOpen &&  <CartDropdown/>}

      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation