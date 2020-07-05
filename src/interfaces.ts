export interface IEpisode {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  season: number;
  number: number;
}

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: any;
}
