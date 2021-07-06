import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { connect } from 'react-redux';

const Header = ({ quantityProducts }) => (
  <header className="header">
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="/">
            <a className="nav__link">Product catalog</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/basket">
            <a className="nav__link">
              Basket&nbsp;
              {quantityProducts > 0 && `(${quantityProducts})`}
            </a>

          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>
      {`
      .header {
        flex: 0 0 100%;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 1;
      }

      .nav__list {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        padding: 0 50px;
      }
     
      .nav__link {
        padding: 10px 0;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        color: #000;
        transition: color 0.3s;
      }
      
      .nav__link:hover {
        color: #ff5252;
      }
    `}
    </style>
  </header>
);

const mapStateToProps = state => ({

  quantityProducts: Object.keys(state.basketItems)
    .map(key => (
      state.basketItems[key].count
    ))
    .reduce((sum, currentValue) => (
      sum + currentValue
    ), 0),
});

Header.propTypes = {
  quantityProducts: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
