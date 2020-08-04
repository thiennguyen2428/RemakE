import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TextSize, Padding} from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: Padding.base,
    paddingVertical: Padding.base,
    width: 92,
    minHeight: 50,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: TextSize.xsmal,
    padding: Padding.small,
    textAlign: 'center',
  },
});

export const CategoryItem = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.image_url}} />
      <Text style={styles.text} numberOfLines={2}>
        {props?.title || ''}
      </Text>
    </View>
  );
};
