import {Image, View, TextInput} from 'react-native';
import React from 'react';
import {SearchBarStyles} from './Styles';
import SearchImage from '../../assets/ic_search.png';

export const SearchBar = () => {
  return (
    <View style={SearchBarStyles.container}>
      <View style={SearchBarStyles.content}>
        <Image
          style={SearchBarStyles.searchIcon}
          source={SearchImage}
          resizeMode={'contain'}
        />
        <TextInput
          placeholder={'Bạn tìm gì hôm nay...'}
          style={SearchBarStyles.searchBox}
        />
      </View>
    </View>
  );
};
