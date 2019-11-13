import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { startClock, tickClock } from '../actions';
import Page from '../components/page';
import { WithReduxNextPageContext } from '../interfaces';

interface OtherProps {
  dispatch: Dispatch;
}

class Other extends React.Component<OtherProps> {
  static async getInitialProps(
    props: WithReduxNextPageContext,
  ): Promise<{
    isServer: boolean;
  }> {
    const { store, req } = props;
    const isServer = !!req;
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
