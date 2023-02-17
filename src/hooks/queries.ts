import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {MoviesNowPlaying} from '../interfaces/movieInterface';
import {MOVIE_API_KEY} from '../../secrets';

const clientAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: MOVIE_API_KEY,
    language: 'es-ES',
  },
});

export const useMoviesData = () => {
  const query = useQuery(['movies'], () =>
    clientAPI.get<MoviesNowPlaying>('/now_playing'),
  );

  return query;
};
