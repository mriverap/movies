import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type DetailsSectionProps = {
  title: string;
  content: string;
  setNumberOfLines?: boolean;
  numberOfLines?: number;
};

export const DetailSection = ({
  title,
  content,
  setNumberOfLines = false,
  numberOfLines = 0,
}: DetailsSectionProps) => {
  const [maxLines, setMaxLines] = React.useState<number>(numberOfLines);
  const [seeMore, setSeeMore] = React.useState<boolean>(true);
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText} numberOfLines={maxLines}>
          {content}
        </Text>
        {setNumberOfLines && (
          <TouchableOpacity
            onPress={() => {
              seeMore ? setMaxLines(0) : setMaxLines(numberOfLines);
              setSeeMore(!seeMore);
            }}>
            <Text style={styles.seeMore}>
              {seeMore ? 'See more...' : 'See less...'}
            </Text>
          </TouchableOpacity>
        )}
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
  seeMore: {
    color: '#0063B1',
  },
});
