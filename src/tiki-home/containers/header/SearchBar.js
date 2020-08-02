import {Image, View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import SearchImage from '../../assets/ic_search.png';
import {
  LOGO_HEIGHT,
  ICON_HEIGHT,
  ICON_WIDTH,
  Padding,
  TextSize,
} from '../../theme';

const SearchBarStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: LOGO_HEIGHT,
    paddingHorizontal: Padding.normal,
    paddingVertical: Padding.small,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  searchIcon: {
    width: ICON_WIDTH,
    height: ICON_HEIGHT,
    marginHorizontal: Padding.large,
  },
  searchBox: {
    flex: 1,
    fontSize: TextSize.normal,
    paddingEnd: Padding.large,
  },
});

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
