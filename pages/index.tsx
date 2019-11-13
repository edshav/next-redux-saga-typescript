import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { loadData, startClock, tickClock } from '../actions';
import Page from '../components/page';
import { WithReduxNextPageContext } from '../interfaces';

const Index: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startClock());
  });

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />;
};

Index.getInitialProps = async ({
  store,
  req,
}: WithReduxNextPageContext): Promise<{ isServer: boolean }> => {
  const isServer = !!req;
  store.dispatch(tickClock(isServer));

  if (!store.getState().placeholderData) {
    store.dispatch(loadData());
  }

  return { isServer };
};

export default Index;
