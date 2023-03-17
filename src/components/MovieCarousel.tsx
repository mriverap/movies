import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from '../components';
import {GradientContext} from '../context/GradientContext';
import {cardSize} from '../helpers/constants';
import {getColors} from '../helpers/getColors';
import {useMoviesData} from '../hooks/queries';
import {Movie} from '../interfaces';
import {HomeProps} from '../screens/Home';

type MovieCarouselProps = HomeProps & {
  filter: string;
  imageSize: number;
  title: string;
};

export const MovieCarousel = ({
  navigation,
  imageSize,
  filter,
  title,
}: MovieCarouselProps) => {
  const {width: windowWidth} = useWindowDimensions();
  const queryNowPlaying = useMoviesData(filter);
  const {currentColors, updateCurrentColors, updatePreviousColors} =
    React.useContext(GradientContext);
  const movies = queryNowPlaying.data?.data.results;

  const setGradientColors = React.useCallback(
    async (movie: Movie) => {
      const colors = await getColors(movie);
      updatePreviousColors(currentColors);
      colors && updateCurrentColors(colors);
    },
    [currentColors, updatePreviousColors, updateCurrentColors],
  );

  React.useEffect(() => {
    movies && setGradientColors(movies[0]);
  }, [movies]);

  if (queryNowPlaying.isLoading) {
    return <ActivityIndicator color="grey" size={10} />;
  } else {
    return (
      <View style={{height: cardSize[imageSize].height}}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <Carousel
          data={movies ?? []}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', {movie: item})}
                style={styles.carouselCard}>
                <MoviePoster movie={item} imageSizeIndex={imageSize} />
              </TouchableOpacity>
            );
          }}
          sliderWidth={windowWidth}
          itemWidth={cardSize[imageSize].width}
          layout={'default'}
          onSnapToItem={index => {
            const movie = movies && movies[index];
            movie && setGradientColors(movie);
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 5,
    marginTop: 2,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFF',
  },
  carouselCard: {
    flex: 1,
  },
});
