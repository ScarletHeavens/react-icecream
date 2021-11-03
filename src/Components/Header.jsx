import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../scss/assets/img/monjelati_logo.png';
import {Button} from './index'
import {useSelector} from 'react-redux';

const Header = (
) => {
const {totalPrice, totalItems} = useSelector(({ cart }) => ({
  totalPrice: cart.totalPrice,
  totalItems: cart.totalItems,
}));

return (
    <div className="header">
        <div className="container">
          <div className="header__logo">
          <Link to='/'> <img width="120" src={logo} alt="Pizza logo" />
            <div>
              <h1>Ice-crimes</h1>
            </div>
            </Link> 
          </div>
          <div className="header__cart">
            <Link to = '/cart'><Button totalItems = {totalItems} totalPrice = {totalPrice} className="button--cart"/></Link>
          </div>
        </div>
      </div>
)

}

export default Header;