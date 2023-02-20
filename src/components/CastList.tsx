import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {ActorCard} from './ActorCard';
import {useMovieCredits} from '../hooks/queries';

type CastListProps = {
  movie_id: string;
};
export const CastList = ({movie_id}: CastListProps) => {
  const query = useMovieCredits(movie_id);
  if (query.isLoading) {
    return <Text>Loading cast...</Text>;
  } else if (query.isSuccess) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cast</Text>
        <FlatList
          data={query.data.data.cast}
          renderItem={({item}) => <ActorCard actor={item} posterSize={0} />}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
        />
      </View>
    );
  } else {
    return <Text>Error loading cast.</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 2,
    marginTop: 10,
  },
  title: {
    marginLeft: 18,
    fontSize: 18,
    fontWeight: '800',
  },
});
