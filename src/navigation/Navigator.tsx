import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomCarousel} from '../components'
import {Home, Details} from '../screens';
import {Movie} from '../interfaces/movies';

export type RootStackParamList = {
  Home: undefined;
  Details: {movie: Movie};
  Experimental: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Experimental"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <Stack.Screen name="Experimental" component={CustomCarousel} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
