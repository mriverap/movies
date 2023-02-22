import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces';
import {imageBaseUrl, imageSize, cardSize} from '../hooks/constants';

type ActorCardProps = {
  actor: Cast;
  posterSize: number;
};
export const ActorCard = ({actor, posterSize}: ActorCardProps) => {
  const uri = `${imageBaseUrl}${imageSize[posterSize]}${actor.profile_path}`;
  return (
    <View style={{...styles.container, width: cardSize[posterSize].width * 5}}>
      {actor.profile_path && (
        <Image source={{uri}} style={{...cardSize[posterSize]}} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{actor.name}</Text>
        <Text style={styles.characterText}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 5,
    borderColor: 'grey',
    paddingTop: 12,
    paddingBottom: 1,
    paddingLeft: 5,
  },
  textContainer: {
    marginLeft: 5,
    marginTop: 10,
  },
  nameText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  characterText: {
    fontSize: 12,
    color: 'grey',
  },
});
