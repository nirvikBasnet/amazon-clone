import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Header.css";

function Header() {
    return (
        <nav className="header">
            {/* Logo on the left -> image */}
            <Link to='/'>
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            


            {/* Search Box */}
            <div className="header__search">
            <input type='text' className="header__searchInput"></input>
            <SearchIcon className="header__searchIcon"/>
            </div>


            {/* 3 links */}

            <div className="HeaderNav">

                {/* 1st Link */}
                <Link to='/login' className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Hello</span>
                <span className="header__optionLineTwo">Sign In</span>
                </div>
                </Link>


                {/* second option */}
                <Link to='/login' className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>
              


                {/* third option */}
                <Link to='/login' className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>


            </div>

            {/* Basket Icon */}

            <Link to='/login' className="header__link">
                <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineOne header__basketCount">0</span>
                </div>
                </Link>
 


        </nav>
    )
}

export default Header
