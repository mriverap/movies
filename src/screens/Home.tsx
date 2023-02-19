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
import {MovieCard} from '../components/MovieCard';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
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
          renderItem={({item}) => <MovieCard movie={item} imageSizeIndex={5} />}
          horizontal={true}
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
