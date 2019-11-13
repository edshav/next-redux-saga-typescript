import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import Counter from './counter';
import Clock from './clock';
import { State } from '../interfaces';

interface PageProps {
  linkTo: string;
  NavigateTo: string;
  title: string;
}

const selectData = createSelector(
  (state: State) => state.error,
  (state: State) => state.lastUpdate,
  (state: State) => state.light,
  (state: State) => state.placeholderData,
  (error, lastUpdate, light, placeholderData) => ({ error, lastUpdate, light, placeholderData }),
);

const Page: React.FunctionComponent<PageProps> = ({ linkTo, NavigateTo, title }: PageProps) => {
  const { error, lastUpdate, light, placeholderData } = useSelector(selectData);

  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
};

export default Page;
