import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {Movie} from '../interfaces/movies';
import {CastList, DetailSection, MovieCard} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackParamList} from '../navigation/Navigator';
import {useGenres} from '../hooks/queries';
import moment from 'moment';

type DetailsProps = StackScreenProps<RootStackParamList, 'Details'>;

type SubTitleProps = {
  movie: Movie;
};

const SubTitle = ({movie}: SubTitleProps) => {
  const query = useGenres();
  const genres = query.isSuccess ? query.data.data.genres : [];
  const genreNames = movie.genre_ids
    .map(id => genres.find(item => item.id === id)?.name ?? '')
    .join(', ');

  return (
    <View style={styles.rowView}>
      <Icon name="star-outline" size={16} color="grey" />
      <Text style={styles.subTitle}>{movie.vote_average}</Text>
      <View style={styles.genresText}>
        <Text style={styles.subTitle}>{genreNames}</Text>
      </View>
    </View>
  );
};

export const Details = ({route}: DetailsProps) => {
  const movie = route.params?.movie;
  if (!movie) {
    return <Text>Error loading movie</Text>;
  }
  const releaseDate = moment(movie?.release_date);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <MovieCard movie={movie} imageSizeIndex={4} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{movie?.title}</Text>
        <SubTitle movie={movie} />
        <DetailSection
          title="Release date"
          content={releaseDate.format('MMMM Do, YYYY')}
        />
        <DetailSection
          title="Overview"
          content={movie.overview}
          // setNumberOfLines={true}
          numberOfLines={3}
        />
      </View>
      <CastList movie_id={movie.id.toString()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 18,
  },
  card: {
    alignItems: 'center',
  },
  details: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
  },
  rowView: {
    flexDirection: 'row',
  },
  subTitle: {
    fontSize: 14,
    marginLeft: 5,
  },
  genresText: {
    marginLeft: 10,
  },
});
