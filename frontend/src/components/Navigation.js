import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../App.css";
import { useSelector } from "react-redux";
// import shoppingcart from "../imagesByEoin/shopping-cart.png";
// import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import SvgIcon from "@material-ui/icons/ShoppingCartSharp";
import { signout } from "../actions/userActions";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Navigation(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div>
      <header className="flexTheHeader">
        <div className="navmenu">
          {/* {userInfo ? (
            <Link className="spacebetween" to="/profile">
              {userInfo.name}
            </Link>
          ) : null} */}
          {/* {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <a href="#">Admin</a>
              <ul className="dropdown-content">
                <li>
                  <Link className="spacebetween" to="/orderlist">
                    Orders
                  </Link>
                  <Link className="spacebetween" to="/productlist">
                    Products
                  </Link>
                  <Link className="spacebetween" to="/edittakeaway">
                    Takeaway
                  </Link>
                </li>
              </ul>
            </div>
          )} */}
          {userInfo ? (
            <Link className="spacebetween" to="/orderlist">
              Orders
            </Link>
          ) : null}
           {userInfo ? (
            <Link className="spacebetween" to="/edittakeaway">
            Takeaway
          </Link>
          ) : null}
          {userInfo ? (
            <Link className="spacebetween" to="/productlist">
            Products
          </Link>
          ) : null}
          {userInfo ? (
            <Link
              className="spacebetween"
              to="#signout"
              onClick={signoutHandler}
            >
              Sign Out
            </Link>
          ) : null}
        </div>
        <div className="header">
          <div id="noMargin" className="brand burgerMenu">
            <button onClick={openMenu}>&#9776;</button>
          </div>

          <div className="fourHandsHeading">
            <Link to="/">
              <h3 className="fourHandsHeadingText">
                <span className="headingColours">4 Hands</span>Food Studio
              </h3>
            </Link>
          </div>

          <div className="header-links">
            <Link className="" to="/cart/:id?">
              <h5>
                CART
                {cart.cartItems.length ? (
                  <h5>({cart.cartItems.length})</h5>
                ) : null}{" "}
              </h5>
            </Link>
          </div>
        </div>
        <hr />

        <div className="theActualNav">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
          <Link to="/shop">
            <h2>Products</h2>
          </Link>
          <Link to="/takeaway">
            <h2>Takeaway</h2>
          </Link>
          <Link to="/blog">
            <h2>Blog</h2>
          </Link>
          <Link to="/events">
            <h2>Events</h2>
          </Link>
        </div>
      </header>
      {/* <hr/> */}

      <aside className="sidebar">
        <h3>Navigation</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul className="categories">
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/takeaway">Takeaway</Link>
            <Link to="/blog">Recipes</Link>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </aside>

      {/* <header>
        <ul className="header">
        <li className="cart-icon">
          <a className="cart-text" href="/cart/:id?">
            <SvgIcon>
              <ShoppingCartSharpIcon></ShoppingCartSharpIcon>
            </SvgIcon>{cartItems.length === 0 ? null : cartItems.length}</a>
            </li>                
          <div className="navLeftSide">

            <li>
              <Link to="/">
                <h2 className="mobilefonth2">timberandbarkmulch.ie</h2>
              </Link>
            </li>
          </div>

          <div>
            <li>
              <button className="burger-menu" onClick={openMenu}>
                &#9776;
              </button>
            </li>
          </div>

          <span className="notForMobile">

          {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <ul>
              <li>
              <Link to="/signin">Sign In</Link>
              </li>
              
              <li>
                <a href="/#about">About</a>
              </li>

              <li>
                <a href="/#products">Products</a>
              </li>

              <li>
                <a href="/#contact">Contact</a>
              </li>

              <li>
              <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link></li></ul>
            )}
            </span>
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}

            
         
        </ul>
        <div className="straightenThis"></div>
      </header>

      <aside className="sidebar">
        <h3>Navigation</h3>
        <h5 className="sidebar-close-button" onClick={closeMenu}>
          X
        </h5>
        <ul className="categories">
          <li>
            <h5><a className="whitetext" href="/">Home</a></h5>
          </li>
          <li>
            <h5><a className="whitetext" href="/#products">Products</a></h5>
          </li>
          <li>
            <h5><a className="whitetext" href="/#contact">Contact</a></h5>
          </li>
        </ul>
      </aside> */}
    </div>
  );
}

export default Navigation;
