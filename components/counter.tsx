import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { increment, decrement, reset } from '../actions';
import { State } from '../interfaces';

interface CounterProps {
  dispatch: Dispatch;
  count: number;
}

class Counter extends Component<CounterProps> {
  increment = (): void => {
    this.props.dispatch(increment());
  };

  decrement = (): void => {
    this.props.dispatch(decrement());
  };

  reset = (): void => {
    this.props.dispatch(reset());
  };

  render(): JSX.Element {
    const { count } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = ({ count }: State): { count: number } => ({ count });
export default connect(mapStateToProps)(Counter);
