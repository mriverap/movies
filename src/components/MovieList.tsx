import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import React from 'react';
import {MovieCard} from './MovieCard';
import {useMoviesData} from '../hooks/queries';

type MovieListProps = {
  title: string;
  filter: string;
  imageSize: number;
};

export const MovieList = ({filter, imageSize, title}: MovieListProps) => {
  const query = useMoviesData(filter);

  if (query.isLoading) {
    return <ActivityIndicator color="grey" size={10} />;
  } else {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <FlatList
          data={query.data?.data.results}
          renderItem={({item}) => (
            <MovieCard movie={item} imageSizeIndex={imageSize} />
          )}
          horizontal={true}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 1,
    padding: 5,
    marginTop: 15,
  },
  title: {
    marginBottom: 5,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
