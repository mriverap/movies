import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Movie} from '../interfaces'
import {MoviePoster, Genres, Rating} from './';

export const MovieCard = (props: { movie: Movie}) => {
  const {movie} = props;
    return (
    <View style={styles.container}>
      <View style={styles.poster}>
      <MoviePoster movie={movie} imageSizeIndex={4} />
      </View>
      <View style={styles.titleContainer}><Text style={styles.titleText}>{movie.title}</Text></View>
      <Genres movie={movie}/>
      <Rating />
      <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.descriptionText}>{movie.overview}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      width: 320,
      height: 570,
      margin: 15,
      borderRadius: 20,
      alignItems: 'center',
      padding: 10,
      borderColor: 'grey',
      borderWidth: StyleSheet.hairlineWidth
        
    },
    poster: {
      height: 400,
      width: 260,
      alignItems: 'center'

    },
    titleContainer: {
      margin: 10
    },
    titleText: {
      fontSize: 18,
      fontWeight: "600",
      textAlign: 'center'
    },
    descriptionContainer: {
      width: 300,
      marginVertical: 10
    },
    descriptionText: {
      fontSize: 12
    }
})