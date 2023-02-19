import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {imageBaseUrl, imageSize, cardSize} from '../hooks/constants';

interface MovieCardProps {
  movie: Movie;
  imageSizeIndex: number;
}

export const MovieCard = ({movie, imageSizeIndex}: MovieCardProps) => {
  const uri = `${imageBaseUrl}${imageSize[imageSizeIndex]}${movie.poster_path}`;
  console.log(uri);
  return (
    <View style={{...styles.container, ...cardSize[imageSizeIndex]}}>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
  },
  image: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // elevation: 5,
  },
});
