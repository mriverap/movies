import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useMoviesData} from '../hooks/queries'
import {MoviePoster} from '../components';

export const CustomCarousel = () => {
  const query = useMoviesData('now_playing');

  if(query.isLoading){
    return <View><Text>Loading...</Text></View>
  }

  return (
    <View>
      <Text>Carousel</Text>
      <FlatList
      horizontal={true}
      data={query.data?.data.results}
      renderItem={({item}) => {
            return (
                <MoviePoster movie={item} 
                imageSizeIndex={3} />
            );
          }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})