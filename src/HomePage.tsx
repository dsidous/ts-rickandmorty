import React, { Suspense, useContext, lazy } from 'react';

import { Store } from './Store';
const Episodes = lazy<any>(() => import('./Episodes'));

export default (): JSX.Element => {
  const { state } = useContext(Store);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className='episode-layout'>
        <Episodes episodes={state.episodes} />
      </section>
    </Suspense>
  );
};
