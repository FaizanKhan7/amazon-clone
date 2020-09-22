import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import firebase from "../firebase";
function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      firebase.auth().signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={require("../Assets/amazon_logo.png")}
          alt="amazon_logo"
        />
      </Link>
      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionCart">
            <ShoppingCartIcon className="header__cartIcon" />
            <span className="header__optionLineTwo header__basketCount">
              {cart?.length}
              {/* adding a question mark is called the potional chaining, what it means is for any reason, don't have the correct value or cart becomes undefined due to an error, it won't freakout, it will just gracefully terminate, or gracefully handle the error */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
