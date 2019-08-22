import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import {
  increaseBasketItem,
  decreaseBasketItem,
  removeBasketItem,
} from '../redux/actions';

const Basket = ({
  products,
  increaseItem,
  decreaseItem,
  removeItem,
  productsSubtotal,
}) => (
  <Layout>
    <main className="basket">
      <h1 className="basket__title">Basket</h1>
      {Object.keys(products).map(key => (
        <div
          key={key}
          className="basket__product"
        >
          <div className="basket__product-name">{products[key].title}</div>
          <button
            type="button"
            className="basket__product-btn"
            onClick={() => decreaseItem(key, products[key].price)}
          >
            -
          </button>
          <div className="basket__product-count">{products[key].count}</div>
          <button
            type="button"
            className="basket__product-btn"
            onClick={() => increaseItem(key, products[key].price)}
          >
            +
          </button>
          <div className="basket__product-amount">
            $
            {products[key].count * products[key].price}
          </div>
          <button
            type="button"
            className="basket__product-btn-delete"
            onClick={() => removeItem(key, products[key].count)}
          >
            x
          </button>
        </div>
      ))}
      <div className="basket__products-subtotal">
        Subtotal: $
        {productsSubtotal}
      </div>
      <style jsx>
        {`
      * {
        font-size: 16px;
       }

      .basket {
        flex: 0 0 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 100px 20px 20px;
      }

      .basket__title {
        flex: 0 0 100%;
        font-size: 24px;
        text-align: center;
        margin-bottom: 20px;
      }
      
      .basket__product {
        flex: 0 0 50%;
        display: flex;
        align-items: center;
        border: 1px solid #f3f3f3;
        padding: 5px;
        margin: 5px;
      }
      
      .basket__product-name {
        flex: 0 0 68%;
      }
      
      .basket__product-btn {
        flex: 0 0 4%;
        background: #f74258;
        color: #fff;
        border: none;
        font-size: 20px;
        cursor: pointer;
      }
      
      .basket__product-btn:focus {
        outline: none;
        box-shadow: 0 0 3px 1px #f75942;
      }
      
      .basket__product-count {
        flex: 0 0 4%;
        text-align: center;
      }
      
      .basket__product-amount {
        flex: 0 0 14%;
        padding-left: 15px;
      }
      
      .basket__product-btn-delete {
        background: none;
        border: none;
        flex: 0 0 4%;
        font-size: 20px;
        cursor: pointer;
      }
      
      .basket__products-subtotal {
        flex: 0 0 50%;
        text-align: right;
        margin: 50px 0;
        border-top: 1px solid #f3f3f3;
        padding-top: 10px;
      }
    `}
      </style>
    </main>
  </Layout>
);

const mapStateToProps = state => ({
  products: state.basketItems,
  productsSubtotal: Object.keys(state.basketItems)
    .map(key => (
      state.basketItems[key].count * state.basketItems[key].price
    ))
    .reduce((sum, currentValue) => (
      sum + currentValue
    ), 0),

});

const mapDispatchToProps = dispatch => ({
  increaseItem: (productId, productPrice) => (
    dispatch(increaseBasketItem(productId, productPrice))
  ),
  decreaseItem: (productId, productPrice) => (
    dispatch(decreaseBasketItem(productId, productPrice))
  ),
  removeItem: (productId, count) => (
    dispatch(removeBasketItem(productId, count))
  ),
});

Basket.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  productsSubtotal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
