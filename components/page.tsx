import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import Counter from './counter';
import Clock from './clock';
import { State, User } from '../interfaces';

interface PageProps {
  linkTo: string;
  NavigateTo: string;
  title: string;
}

const Page: React.FunctionComponent<PageProps> = ({ linkTo, NavigateTo, title }: PageProps) => {
  const error = useSelector((state: State): null | Error => state.error);
  const lastUpdate = useSelector((state: State): number => state.lastUpdate);
  const light = useSelector((state: State): boolean => state.light);
  const placeholderData = useSelector((state: State): User[] | null => state.placeholderData);

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
