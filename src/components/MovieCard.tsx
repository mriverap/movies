import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movies';
import {imageBaseUrl, imageSize, cardSize} from '../hooks/constants';
import {useNavigation} from '@react-navigation/native';

interface MovieCardProps {
  movie: Movie;
  imageSizeIndex: number;
}

export const MovieCard = ({movie, imageSizeIndex}: MovieCardProps) => {
  const navigation = useNavigation();

  const uri = `${imageBaseUrl}${imageSize[imageSizeIndex]}${movie.poster_path}`;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {movie})}
      style={{
        ...styles.imageContainer,
        ...cardSize[imageSizeIndex],
        marginRight: cardSize[imageSizeIndex].width / 10,
      }}>
      <Image source={{uri}} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
