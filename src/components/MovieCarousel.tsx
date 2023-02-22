import React from 'react';
import {
  View,
  useWindowDimensions,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {MovieCard} from '../components';
import {cardSize} from '../hooks/constants';
import {useMoviesData} from '../hooks/queries';

type MovieCarouselProps = {
  filter: string;
  imageSize: number;
  title: string;
};

export const MovieCarousel = ({
  imageSize,
  filter,
  title,
}: MovieCarouselProps) => {
  const {width: windowWidth} = useWindowDimensions();
  const queryNowPlaying = useMoviesData(filter);

  if (queryNowPlaying.isLoading) {
    return <ActivityIndicator color="grey" size={10} />;
  } else {
    return (
      <View style={{height: cardSize[imageSize].height}}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <Carousel
          data={queryNowPlaying.data?.data.results ?? []}
          renderItem={({item}) => (
            <MovieCard movie={item} imageSizeIndex={imageSize} />
          )}
          sliderWidth={windowWidth}
          itemWidth={cardSize[imageSize].width}
          layout={'default'}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 5,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
