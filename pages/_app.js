import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default class _app extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
