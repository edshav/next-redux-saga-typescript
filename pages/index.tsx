import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { loadData, startClock, tickClock } from '../actions';
import Page from '../components/page';
import { WithReduxNextPageContext } from '../interfaces';

interface IndexProps {
  dispatch: Dispatch;
}

class Index extends React.Component<IndexProps> {
  static async getInitialProps(props: WithReduxNextPageContext): Promise<{ isServer: boolean }> {
    const { store, req } = props;
    const isServer = !!req;
    store.dispatch(tickClock(isServer));

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }

    return { isServer };
  }

  componentDidMount(): void {
    this.props.dispatch(startClock());
  }

  render(): JSX.Element {
    return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />;
  }
}

export default connect()(Index);
