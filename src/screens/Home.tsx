import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useMoviesData} from '../hooks/queries';
import {Movie} from '../interfaces/movieInterface';

type ItemProps = {
  movie: Movie;
};

const Item = ({movie}: ItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text>Title: {movie.title}</Text>
      <Text>Release date: {movie.release_date}</Text>
      {/* <Text>Overview: {item.overview}</Text> */}
    </View>
  );
};

export const Home = props => {
  const {navigation} = props;
  const query = useMoviesData();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Details</Text>
      </TouchableOpacity>
      {query.isLoading && <ActivityIndicator color="purple" size={100} />}
      {query.isSuccess && (
        <FlatList
          data={query.data.data.results}
          renderItem={({item}) => <Item movie={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  itemContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 1,
    padding: 5,
  },
});
