import React, { useEffect, useContext } from 'react';
import { Link } from '@reach/router';
import { Store } from './Store';

const App = (props: any): JSX.Element => {
  const { dispatch } = useContext(Store);

  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      return dispatch({
        type: 'FETCH_DATA',
        payload: data._embedded.episodes,
      });
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <header className='header'>
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!</p>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/favs'>Favourites</Link>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default App;
