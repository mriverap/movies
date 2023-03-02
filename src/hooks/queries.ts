import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {
  Credits,
  Genres,
  MovieDBConfiguration,
  MovieResults,
} from '../interfaces';
import {movieBaseUrl} from '../helpers/constants';
import {MOVIE_API_KEY} from '../../secrets';

const clientAPI = axios.create({
  baseURL: movieBaseUrl,
  params: {
    api_key: MOVIE_API_KEY,
    language: 'en-US',
  },
});

// now_playing, upcoming, popular, top_rated
export const useMoviesData = (filter: string, page: number = 1) => {
  const query = useQuery(['movie', filter, page], () =>
    clientAPI.get<MovieResults>(`/movie/${filter}?region=US&page=${page}`),
  );

  return query;
};

export const useMovieCredits = (movie_id: string) => {
  const query = useQuery(['movie', movie_id, 'credits'], () =>
    clientAPI.get<Credits>(`/movie/${movie_id}/credits`),
  );
  return query;
};

export const useMoviesConfiguration = () => {
  const query = useQuery(
    ['movies', 'config'],
    () => clientAPI.get<MovieDBConfiguration>('/configuration'),
    {
      staleTime: 1000 * 60 * 60 * 24,
    },
  );
  return query;
};

export const useGenres = () => {
  const query = useQuery(
    ['genre', 'movie', 'list'],
    () => clientAPI.get<Genres>('/genre/movie/list'),
    {
      staleTime: 1000 * 60 * 60 * 24,
    },
  );
  return query;
};
