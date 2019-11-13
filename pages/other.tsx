import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { startClock, tickClock } from '../actions';
import Page from '../components/page';
import { WithReduxNextPageContext } from '../interfaces';

const Other: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startClock());
  });

  return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />;
};

Other.getInitialProps = async ({
  store,
  req,
}: WithReduxNextPageContext): Promise<{
  isServer: boolean;
}> => {
  const isServer = !!req;
  store.dispatch(tickClock(isServer));
  return { isServer };
};

export default Other;
