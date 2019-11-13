import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import Counter from './counter';
import Clock from './clock';

interface PageProps {
  error?: Error;
  lastUpdate?: string;
  light?: string;
  linkTo: string;
  NavigateTo: string;
  placeholderData?: string;
  title: string;
}

const Page: React.FunctionComponent<PageProps> = ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title,
}: PageProps) => {
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

export default connect(state => state)(Page);
