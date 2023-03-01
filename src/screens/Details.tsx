import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import type {StackScreenProps} from '@react-navigation/stack';
import {Movie} from '../interfaces/movies';
import {
  CastList,
  DetailSection,
  GradientBackground,
  MovieCard,
} from '../components';
import {useGenres} from '../hooks/queries';
import {RootStackParamList} from '../navigation/Navigator';

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

export const Details = ({route, navigation}: DetailsProps) => {
  const movie = route.params?.movie;
  if (!movie) {
    return <Text>Error loading movie</Text>;
  }
  const releaseDate = moment(movie?.release_date);
  return (
    <GradientBackground>
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
            numberOfLines={3}
          />
        </View>
        <CastList movie_id={movie.id.toString()} />
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back-circle-outline" size={40} color="grey" />
        </TouchableOpacity>
      </ScrollView>
    </GradientBackground>
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
  backIcon: {
    position: 'absolute',
    top: 0,
    left: 10,
  },
});
