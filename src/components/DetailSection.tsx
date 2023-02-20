import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type DetailsSectionProps = {
  title: string;
  content: string;
};

export const DetailSection = ({title, content}: DetailsSectionProps) => {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {marginTop: 5},
  titleText: {
    fontSize: 18,
    fontWeight: '800',
  },
  content: {},
  contentText: {
    fontSize: 16,
  },
});
