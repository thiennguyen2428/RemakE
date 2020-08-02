import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  HOME_BANNER_ASPECT_RATIO,
  HOME_BANNER_WIDTH,
  LOGO_HEIGHT,
  Padding,
} from '../../theme';

const CONTAINER_OVERLAP_TOP = Math.round(
  HOME_BANNER_WIDTH / HOME_BANNER_ASPECT_RATIO / 2 -
    LOGO_HEIGHT -
    Padding.normal,
);

const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: -CONTAINER_OVERLAP_TOP,
  },
});

export const Main = () => {
  return <View style={MainStyle.container} />;
};
