import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from './containers/header';
import {Main} from './containers/main';

const TikiHomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const TikiHome = () => {
  return (
    <View style={TikiHomeStyles.container}>
      <Header />
      <Main />
    </View>
  );
};
