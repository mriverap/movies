import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export const Home = ({navigation}: props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
