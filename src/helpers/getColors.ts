import ImageColors from 'react-native-image-colors';
import {imageBaseUrl, imageSize as imageSizeArray} from '../helpers/constants';
import {Movie} from '../interfaces';

export const getColors = async (movie: Movie) => {
  const uri = `${imageBaseUrl}${imageSizeArray[1]}${movie?.poster_path}`;
  try {
    const result = await ImageColors.getColors(uri, {
      cache: false,
      key: 'unique_key',
    });
    switch (result.platform) {
      case 'android':
        return {primary: result.dominant, secondary: result.average};
      case 'ios':
        return {primary: result.primary, secondary: result.secondary};
      default:
        throw new Error('Unexpected platform key');
    }
  } catch (error) {
    console.error(error);
  }

  return undefined;
};
