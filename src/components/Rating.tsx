import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Rating = () => {
  return (
    <View style={styles.container}>
      <Text>Rating component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey'
    }
})