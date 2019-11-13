import { Store } from 'redux';
import { Task } from 'redux-saga';
import { NextPageContext } from 'next';

export interface WithSagaTaskStore extends Store {
  sagaTask?: Task;
}

export interface WithReduxNextPageContext extends NextPageContext {
  store: WithSagaTaskStore; // Added with react-redux Provider in _app.tsx
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface State {
  count: number;
  error: null | Error;
  lastUpdate: number;
  light: boolean;
  placeholderData: User[] | null;
}
