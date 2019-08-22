import React from 'react';
import ProductCatalog from '../components/ProductCatalog';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <ProductCatalog />
    <style jsx>
      {`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}
    </style>
  </Layout>
);

export default Index;
