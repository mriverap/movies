import 'react-native-gesture-handler';
import React from 'react';
import {LogBox, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GradientProvider} from './src/context/GradientContext';

const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}

LogBox.ignoreLogs(['ViewPropTypes']);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GradientProvider>
        <NavigationContainer>
          <SafeAreaView style={{flex:1}}>
          <Navigator />
          </SafeAreaView>
        </NavigationContainer>
      </GradientProvider>
    </QueryClientProvider>
  );
};

export default App;
