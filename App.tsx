import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GradientProvider} from './src/context/GradientContext';

const queryClient = new QueryClient();

LogBox.ignoreLogs(['ViewPropTypes']);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GradientProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </GradientProvider>
    </QueryClientProvider>
  );
};

export default App;
