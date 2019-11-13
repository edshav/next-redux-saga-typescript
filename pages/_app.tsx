import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../store';
import { NextReduxSagaStore } from '../interfaces';

interface MyAppProps {
  store: NextReduxSagaStore;
}

class MyApp extends App<MyAppProps> {
  static async getInitialProps({
    Component,
    ctx,
  }): Promise<{
    pageProps: {};
  }> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render(): JSX.Element {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
