import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {HOME_BANNER_WIDTH, Padding} from '../theme';

const BANNER_DEFAULT_RATIO = 3;

const BANNER_DEFAULT_WIDTH = HOME_BANNER_WIDTH - 2 * Padding.normal;

const BannerStyles = StyleSheet.create({
  image: {
    width: BANNER_DEFAULT_WIDTH,
    aspectRatio: BANNER_DEFAULT_RATIO,
    alignSelf: 'center',
    borderRadius: 16,
  },
});

export const Banner = (props) => {
  if (!props.url) {
    return null;
  }

  const imageStyle = StyleSheet.compose([
    BannerStyles.image,
    {
      width: props?.width || BANNER_DEFAULT_WIDTH,
      aspectRatio: props?.ratio || BANNER_DEFAULT_RATIO,
    },
  ]);

  return (
    <Image source={{uri: props.url}} style={imageStyle} resizeMode={'cover'} />
  );
};
