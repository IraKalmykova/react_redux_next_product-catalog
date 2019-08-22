import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToBasket } from '../redux/actions';
import products from '../static/products';
import Product from './Product';

const ProductCatalog = ({ addProductToBasket }) => (
  <main className="products">
    <h1 className="products__title">Product Catalog</h1>
    {products.map(product => (
      <Product key={product.id} product={product} />
    ))}
    <style jsx>
      {`
      * {
        box-sizing: border-box;
      }

      .products {
        flex: 0 0 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 100px 20px 20px;
      }
      
      .products__title {
        flex: 0 0 100%;
        font-size: 24px;
        text-align: center;
      }
    `}
    </style>
  </main>
);

const mapDispatchToState = dispatch => ({
  addProductToBasket: (productId, productTitle, productPrice) => (
    dispatch(addToBasket(productId, productTitle, productPrice))
  ),
});

ProductCatalog.propTypes = {
  addProductToBasket: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToState)(ProductCatalog);
