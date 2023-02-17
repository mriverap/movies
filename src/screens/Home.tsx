import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useMoviesData} from '../hooks/queries';
import {FlatList} from 'react-native-gesture-handler';

export const Home = ({navigation}: props) => {
  const query = useMoviesData();

  const Item = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text>Title: {item.title}</Text>
        <Text>Release date: {item.release_date}</Text>
        {/* <Text>Overview: {item.overview}</Text> */}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Details</Text>
      </TouchableOpacity>
      {query.isLoading && <Text>Loading...</Text>}
      {query.isSuccess && (
        <FlatList
          data={query.data?.data.results}
          renderItem={({item}) => <Item item={item} />}
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
