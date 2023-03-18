import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGenres } from '../hooks/queries'
import { Movie } from '../interfaces'

export const Genres = (props: {movie:Movie}) => {
  const {movie} = props;
  const genresQuery=useGenres();

  const getMovieGenres = ()=>{
    if(genresQuery.isSuccess){
      return movie.genre_ids.map((g)=> genresQuery.data?.data.genres.find((x)=>x.id===g)?.name
      )
    }
  }
  const genres = getMovieGenres()
  return (
    <View style={styles.container}>
      {genres?.map((g)=><View style={styles.badge}>
        <Text style={styles.label} numberOfLines={2}>{g}</Text></View>)}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        marginBottom: 5,
        justifyContent: 'center'
    },
    badge: {
      backgroundColor: '#b5b3b3',
      margin: 2,
      borderRadius: 5,
      paddingHorizontal: 6
    },
    label: {
      fontSize: 12,
      color: '#ffff'
    }

})