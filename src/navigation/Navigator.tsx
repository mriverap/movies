import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Details} from '../screens';
import {Movie} from '../interfaces/movies';

export type RootStackParamList = {
  Home: undefined;
  Details: {movie: Movie};
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
