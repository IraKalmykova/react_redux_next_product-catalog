import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = props => (
  <div className="page-wrapper">
    <Header />
    {props.children}
    <style jsx>
      {`
      .page-wrapper {
        overflow: hidden;
        font-family: Muli, sans-serif;
      }
    `}
    </style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Layout;
