import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Movie} from '../interfaces'
import {MoviePoster, Genres, Rating} from './';

export const MovieCard = (props: { movie: Movie, imageSizeIndex: number}) => {
  const {movie, imageSizeIndex} = props;
    return (
    <View style={styles.container}>
      <MoviePoster movie={movie} imageSizeIndex={imageSizeIndex} />
      <Genres />
      <Rating />
      <View style={styles.descriptionContainer}>
      <Text>{movie.overview}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // width: 400
    },
    descriptionContainer: {
        width: 180

    }
})