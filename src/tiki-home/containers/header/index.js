import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

import {TopBar} from './TopBar';
import {SearchBar} from './SearchBar';

import TikiHomeBanner from '../../assets/tiki_home_header.png';

import {HOME_BANNER_ASPECT_RATIO, HOME_BANNER_WIDTH} from '../../theme';

export const HeaderStyles = StyleSheet.create({
  container: {
    width: HOME_BANNER_WIDTH,
    aspectRatio: HOME_BANNER_ASPECT_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Header = () => {
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={TikiHomeBanner}
      style={HeaderStyles.container}>
      <SafeAreaView>
        <TopBar />
        <SearchBar />
      </SafeAreaView>
    </ImageBackground>
  );
};
