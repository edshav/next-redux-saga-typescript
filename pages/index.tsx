import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { END } from 'redux-saga';
import { loadData, startClock, tickClock } from '../actions';
import Page from '../components/page';
import { wrapper } from '../store';

const Index: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startClock());
  });

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false));

  if (!store.getState().placeholderData) {
    store.dispatch(loadData());
    store.dispatch(END);
  }
  await store.sagaTask?.toPromise();
});

export default Index;
