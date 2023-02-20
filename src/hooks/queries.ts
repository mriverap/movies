import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {
  Credits,
  MoviesNowPlaying,
  MovieDBConfiguration,
} from '../interfaces/movieInterface';
import {MOVIE_API_KEY} from '../../secrets';
import {movieBaseUrl, configuratioAPIUrl} from '../hooks/constants';

const clientAPI = axios.create({
  baseURL: movieBaseUrl,
  params: {
    api_key: MOVIE_API_KEY,
    language: 'en-US',
  },
});

const configAPI = axios.create({
  baseURL: configuratioAPIUrl,
  params: {
    api_key: MOVIE_API_KEY,
  },
});

// now_playing, upcoming, popular, top_rated
export const useMoviesData = (filter: string) => {
  const query = useQuery(['movies', filter], () =>
    clientAPI.get<MoviesNowPlaying>(`/${filter}`),
  );

  return query;
};

export const useMovieCredits = (movie_id: string) => {
  const query = useQuery(['movie', movie_id, 'credits'], () =>
    clientAPI.get<Credits>(`/${movie_id}/credits`),
  );
  return query;
};

export const useMoviesConfiguration = () => {
  const query = useQuery(['movies', 'config'], () =>
    configAPI.get<MovieDBConfiguration>('/'),
  );
  return query;
};
