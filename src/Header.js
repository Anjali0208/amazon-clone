import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}

      <div className="header__nav">
        {/* 1st links */}

        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionlineOne">Hlo, {user?.email}</span>
            <span className="header__optionlineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* 2nd links */}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionlineOne">returns</span>
            <span className="header__optionlineTwo">& orders</span>
          </div>
        </Link>

        {/* 3rd links */}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionlineOne">your </span>
            <span className="header__optionlineTwo">prime</span>
          </div>
        </Link>

        {/* 4th links */}
        <Link to="checkout" className="header__link">
          <div className="header__optionBasket">
            {/* shopping basket option */}
            <ShoppingBasketIcon />

            {/* number of items in the basket */}
            <span className="header__optionlineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* basket */}
    </nav>
  );
}

export default Header;
