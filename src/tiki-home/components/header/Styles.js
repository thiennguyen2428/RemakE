import {Dimensions, StyleSheet} from 'react-native';

export const HOME_BANNER_ASPECT_RATIO = 16 / 9;

export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const TopBarStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  logoContainer: {
    flex: 1,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginStart: 24 * 2 + 12 * 4,
    width: 50,
    height: 50,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 12,
  },
});

export const SearchBarStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    minHeight: 50,
    paddingHorizontal: 12,
  },
  content: {
    flex: 1,
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
  searchBox: {
    flex: 1,
    fontSize: 16,
    paddingEnd: 16,
  },
});

export const HeaderStyles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    aspectRatio: HOME_BANNER_ASPECT_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
