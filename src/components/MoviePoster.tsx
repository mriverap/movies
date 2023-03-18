import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces';
import {imageBaseUrl, imageSize, cardSize} from '../helpers/constants';

interface MoviePoster {
  movie: Movie;
  imageSizeIndex: number;
}

export const MoviePoster = ({movie, imageSizeIndex}: MoviePoster) => {
  const uri = `${imageBaseUrl}${imageSize[imageSizeIndex]}${movie.poster_path}`;
  return (
    <View
      style={{
        ...styles.imageContainer,
        ...cardSize[imageSizeIndex],
      }}>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
  },
  image: {
    flex: 1,
    borderRadius: 18,
    height: '100%'
  },
});
