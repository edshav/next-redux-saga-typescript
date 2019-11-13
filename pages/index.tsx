import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { loadData, startClock, tickClock } from '../actions';
import Page from '../components/page';
import { GetInitialProps } from '../interfaces';

interface IndexProps {
  dispatch: Dispatch;
}

class Index extends React.Component<IndexProps> {
  static async getInitialProps(props: GetInitialProps): Promise<{ isServer: boolean }> {
    const { store, isServer } = props.ctx;
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
