import React from 'react';
import {View, Image} from 'react-native';

import {TopBarStyles} from './Styles';

import TikiLogo from '../../assets/tiki_logo.png';
import CartImage from '../../assets/ic_cart.png';
import ChatImage from '../../assets/ic_chat.png';

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
