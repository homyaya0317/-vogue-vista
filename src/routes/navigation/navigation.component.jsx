import { Outlet, Link, NavLink as RouterNavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/shopping-logo-svgrepo-com.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";
import classes from './navigation.module.css'

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());


  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <Fragment>
      {/* FIRST ROW: Logo + Sign In/Out + Cart */}
      <div className="bg-white  py-2">
        <div>
          <Row className="align-items-center">
            <Col xs={6} md={3}>
              <Link to="/">
                <Logo className="logo" style={{ height: "40px" }} />
              </Link>
            </Col>
            <Col className="d-none d-md-flex justify-content-center">
              {currentUser && (
                <span className="text-success fw-bold">Welcome {currentUser.displayName}</span>
              )}
            </Col>
            <Col xs={6} md={3} className="d-flex justify-content-end align-items-center">
              {currentUser ? (
                <span onClick={signOutUser} style={{ cursor: "pointer", marginRight: "15px" }}>
                  Sign Out
                </span>
              ) : (
                <Link to="/auth" style={{ marginRight: "15px" }}>
                  Sign In / Sign Up
                </Link>
              )}
              <CartIcon />
            </Col>
          </Row>
        </div>
      </div>

      {/* SECOND ROW: Sticky Category Nav */}
    <div className={`sticky-top ${isScrolled ? 'bg-white shadow-sm border-bottom' : ''}`} style={{ zIndex: 1020 }}>

        <Container fluid>
          <Nav className="justify-content-center flex-wrap py-2">
            <Nav.Link as={RouterNavLink} to="/" className={`mx-2 ${classes.navLinkCustom}`}>
              Home
            </Nav.Link>
            <Nav.Link as={RouterNavLink} to="/categories" className={`mx-2 ${classes.navLinkCustom}`} >
              Categories
            </Nav.Link>
            <Nav.Link as={RouterNavLink} to="/categories/hats" className={`mx-2 ${classes.navLinkCustom}`}>
              Hats
            </Nav.Link>
            <Nav.Link as={RouterNavLink} to="/categories/jackets"className={`mx-2 ${classes.navLinkCustom}`}>
              Jackets
            </Nav.Link>
            <Nav.Link as={RouterNavLink} to="/categories/sneakers" className={`mx-2 ${classes.navLinkCustom}`}>
              Sneakers
            </Nav.Link>
            <Nav.Link as={RouterNavLink} to="/categories/mens" className={`mx-2 ${classes.navLinkCustom}`}>
              Mens
            </Nav.Link>
            <Nav.Link as={RouterNavLink} to="/categories/womens"  className={`mx-2 ${classes.navLinkCustom}`}>
              Womens
            </Nav.Link>
          </Nav>
        </Container>
      </div>

      {/* DROPDOWN CART */}

      <div className={classes.CartDropdown}>
      {isCartOpen && <CartDropdown/>}
      </div>
      

      {/* MAIN PAGE CONTENT */}
      <div className=" mt-5 pt-4">
       { <Outlet/>}
      </div>
    </Fragment>
  );
};

export default Navigation;
