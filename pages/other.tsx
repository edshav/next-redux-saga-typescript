import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { startClock, tickClock } from '../actions';
import Page from '../components/page';
import { GetInitialProps } from '../interfaces';

interface OtherProps {
  dispatch: Dispatch;
}

class Other extends React.Component<OtherProps> {
  static async getInitialProps(
    props: GetInitialProps,
  ): Promise<{
    isServer: boolean;
  }> {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));
    return { isServer };
  }

  componentDidMount(): void {
    this.props.dispatch(startClock());
  }

  render(): JSX.Element {
    return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />;
  }
}

export default connect()(Other);
