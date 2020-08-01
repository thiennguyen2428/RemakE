import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';

import {HeaderStyles} from './Styles';
import {TopBar} from './TopBar';
import {SearchBar} from './SearchBar';

import TikiHomeBanner from '../../assets/tiki_home_header.png';

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
