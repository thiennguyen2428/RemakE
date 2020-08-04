import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  HOME_BANNER_ASPECT_RATIO,
  HOME_BANNER_WIDTH,
  LOGO_HEIGHT,
  Padding,
} from '../../theme';
import {FullWidthSwipeContainer} from '../swiper';
import {List} from '../list';

import MockCategory1 from '../../mock/MockCategory1.json';
import MockCategory2 from '../../mock/MockCategory2.json';

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
  return (
    <View style={MainStyle.container}>
      <FullWidthSwipeContainer />
      <List data={MockCategory1} horizontal />
      <List data={MockCategory2} horizontal />
    </View>
  );
};
