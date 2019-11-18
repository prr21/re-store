import React from 'react';

import { Link } from 'react-router-dom';
import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/" className="logo text-dark">ReStore</Link>
      <Link to="cart/" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default ShopHeader;
