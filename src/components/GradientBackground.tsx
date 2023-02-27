import {StyleSheet, SafeAreaView} from 'react-native';
import React, {PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const GradientBackground = ({children}: PropsWithChildren) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#084F6A', '#75CEDB', '#FFF']}
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 0.7, y: 0.7}}
      />
      {children}
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
  },
});
