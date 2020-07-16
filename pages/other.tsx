import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { startClock, tickClock } from '../actions';
import Page from '../components/page';
import { wrapper } from '../store';

const Other: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startClock());
  });

  return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false));
});

export default Other;
