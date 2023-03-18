import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useMoviesData} from '../hooks/queries'
import {MovieCard} from '../components';

export const CustomCarousel = () => {
  const query = useMoviesData('now_playing');

  if(query.isLoading){
    return <View><Text>Loading...</Text></View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
      <FlatList
      horizontal={true}
      data={query.data?.data.results}
      renderItem={({item}) =><MovieCard movie={item} />}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  carousel: {

  }
})