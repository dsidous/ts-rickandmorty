import React, { lazy, Suspense, useContext } from 'react';
import { Store } from './Store';

const Episodes = lazy<any>(() => import('./Episodes'));

export default (): JSX.Element => {
  const { state } = useContext(Store);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className='episode-layout'>
        <Episodes episodes={state.favourites} />
      </section>
    </Suspense>
  );
};
