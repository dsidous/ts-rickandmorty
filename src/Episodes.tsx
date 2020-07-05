import React, { useContext } from 'react';
import { Store } from './Store';
import { IEpisode, IAction } from './interfaces';

const Episodes = (props: any): Array<JSX.Element> => {
  const { state, dispatch } = useContext(Store);
  const { episodes } = props;

  const toggleFavourite = (episode: IEpisode): IAction => {
    const type = state.favourites.includes(episode) ? 'REMOVE_FAV' : 'ADD_FAV';
    return dispatch({
      type,
      payload: episode,
    });
  };

  return episodes.map((episode: IEpisode) => (
    <section key={episode.id} className='episode'>
      <img
        src={episode.image.medium}
        alt={episode.name}
        className='episode-image'
      />
      <div>{episode.name}</div>
      <section>
        <div>
          Season: {episode.season} Number: {episode.number}
        </div>
        <button type='button' onClick={() => toggleFavourite(episode)}>
          {state.favourites.includes(episode) ? 'UnFav' : 'Fav'}
        </button>
      </section>
    </section>
  ));
};

export default Episodes;
