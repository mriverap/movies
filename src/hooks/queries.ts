import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const clientAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '',
    language: 'es-ES',
  },
});

export const useMoviesData = () => {
  const query = useQuery(['movies'], () => clientAPI.get('/now_playing'));

  return query;
};
