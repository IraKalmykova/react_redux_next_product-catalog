import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToBasket } from '../redux/actions';

const Product = ({ product, addProductToBasket }) => (
  <div className="product">
    <div className="product__img">
      <img
        alt={product.title}
        src={`https://source.unsplash.com/250x250/?plate/${product.id}`}
      />
    </div>
    <div className="product__title">
      {product.title}
    </div>
    <div className="product__bottom-info">
      <div className="product__price">
        $
        {product.price}
      </div>
      <button
        type="button"
        className="product__btn"
        onClick={() => (
          addProductToBasket(product.id, product.title, product.price)
        )}
      >
        Buy
      </button>
    </div>
    <style jsx>
      {`
    * {
      box-sizing: border-box;
    }
    
    .product {
      flex: 0 0 18%;
      display: flex;
      flex-wrap: wrap;
      border: 1px solid #f3f3f3;
      border-radius: 5px;
      padding: 30px 15px;
      font-size: 11px;
      line-height: 13px;
      margin: 10px;
      transition: 0.3s;
    }
    
    .product__img {
      flex: 0 0 100%;
      position: relative;
      height: 250px;
      background: #f6f6f6;
      overflow: hidden;
    }
    
    .product__img img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.35s ease;
    }
    
    .product:hover .product__img img {
      transform: scale(1.05);
    }
    
    .product__title {
      flex: 0 0 100%;
      font-size: 16px;
      color: #000;
      margin: 15px 0 25px;
    }
    
    .product__bottom-info {
      flex: 0 0 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .product__price {
      font-weight: bold;
      font-size: 16px;
      text-decoration: none;
      color: #000;
    }
    
    .product__btn {
      flex: 0 0 60%;
      border: 1px solid #ff5252;
      border-radius: 5px;
      background: #ff5252;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.3s;
      padding: 5px 0;
    }
    
    .product__btn:hover {
      background: #fff;
      color: #ff5252;
    }
    
    .product__btn:focus {
      outline: none;
      box-shadow: 0 0 3px 1px #f75942;
    }

  `}
    </style>
  </div>
);

const mapDispatchToState = dispatch => ({
  addProductToBasket: (productId, productTitle, productPrice) => (
    dispatch(addToBasket(productId, productTitle, productPrice))
  ),
});

Product.propTypes = {
  addProductToBasket: PropTypes.func.isRequired,
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(null, mapDispatchToState)(Product);
