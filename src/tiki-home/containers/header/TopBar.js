import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import TikiLogo from '../../assets/tiki_logo.png';
import CartImage from '../../assets/ic_cart.png';
import ChatImage from '../../assets/ic_chat.png';
import {
  Padding,
  ICON_WIDTH,
  LOGO_WIDTH,
  LOGO_HEIGHT,
  ICON_HEIGHT,
} from '../../theme';

const TopBarStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Padding.normal,
  },
  logoContainer: {
    flex: 1,
    minHeight: LOGO_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    marginStart: ICON_WIDTH * 2 + Padding.normal * 4,
  },
  icon: {
    width: ICON_WIDTH,
    height: ICON_HEIGHT,
    marginHorizontal: Padding.normal,
  },
});

export const TopBar = () => {
  return (
    <View style={TopBarStyles.container}>
      <View style={TopBarStyles.logoContainer}>
        <Image
          style={TopBarStyles.logo}
          source={TikiLogo}
          resizeMode={'contain'}
        />
      </View>
      <Image
        style={TopBarStyles.icon}
        source={ChatImage}
        resizeMode={'contain'}
      />
      <Image
        style={TopBarStyles.icon}
        source={CartImage}
        resizeMode={'contain'}
      />
    </View>
  );
};
