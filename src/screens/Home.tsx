import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {MovieCarousel, MovieList} from '../components';

export const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <MovieCarousel filter="now_playing" imageSize={4} title="Now Playing" />
      <MovieList filter="popular" imageSize={2} title="Popular" />
      <MovieList filter="top_rated" imageSize={2} title="Top rated" />
      <MovieList filter="upcoming" imageSize={2} title="Upcoming" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
  },
});
