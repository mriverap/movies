import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {MovieCard} from './MovieCard';
import {cardSize} from '../helpers/constants';
import {useMoviesData} from '../hooks/queries';
import {HomeProps} from '../screens/Home';

type MovieListProps = HomeProps & {
  title: string;
  filter: string;
  imageSize: number;
};

export const MovieList = ({
  navigation,
  filter,
  imageSize,
  title,
}: MovieListProps) => {
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
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', {movie: item})}
                style={{marginRight: cardSize[imageSize].width / 10}}>
                <MovieCard movie={item} imageSizeIndex={imageSize} />
              </TouchableOpacity>
            );
          }}
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
