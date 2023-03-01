import {StyleSheet, SafeAreaView} from 'react-native';
import React, {PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';

export const GradientBackground = ({children}: PropsWithChildren) => {
  const {currentColors} = React.useContext(GradientContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[
          currentColors.primary ?? '#FFFF',
          currentColors.secondary ?? '#FFFF',
          '#FFF',
        ]}
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
