import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {
  MoviesNowPlaying,
  MovieDBConfiguration,
} from '../interfaces/movieInterface';
import {MOVIE_API_KEY} from '../../secrets';
import {movieBaseUrl, configuratioAPIUrl} from '../hooks/constants';

const clientAPI = axios.create({
  baseURL: movieBaseUrl,
  params: {
    api_key: MOVIE_API_KEY,
    language: 'es-ES',
  },
});

const configAPI = axios.create({
  baseURL: configuratioAPIUrl,
  params: {
    api_key: MOVIE_API_KEY,
  },
});

export const useMoviesData = () => {
  const query = useQuery(['movies'], () =>
    clientAPI.get<MoviesNowPlaying>('/now_playing'),
  );

  return query;
};

export const useMoviesConfiguration = () => {
  const query = useQuery(['movies', 'config'], () =>
    configAPI.get<MovieDBConfiguration>('/'),
  );
  return query;
};
