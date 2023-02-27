import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {MovieCarousel, MovieList} from '../components';
import {GradientBackground} from '../components/GradientBackground';
import {RootStackParamList} from '../navigation/Navigator';

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

export const Home = (props: HomeProps) => {
  return (
    <GradientBackground>
      <ScrollView style={styles.container}>
        <MovieCarousel
          {...props}
          filter="now_playing"
          imageSize={4}
          title="Now Playing"
        />
        <MovieList {...props} filter="popular" imageSize={2} title="Popular" />
        <MovieList
          {...props}
          filter="top_rated"
          imageSize={2}
          title="Top rated"
        />
        <MovieList
          {...props}
          filter="upcoming"
          imageSize={2}
          title="Upcoming"
        />
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,
    // marginBottom: 30,
  },
});
