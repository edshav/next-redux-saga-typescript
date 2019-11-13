import { Store } from 'redux';
import { Task } from 'redux-saga';

export interface NextReduxSagaStore extends Store {
  sagaTask?: Task;
}

export interface GetInitialProps {
  ctx: { store: NextReduxSagaStore; isServer: boolean };
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
  error: boolean | Error;
  lastUpdate: number;
  light: boolean;
  placeholderData: User[] | null;
}
