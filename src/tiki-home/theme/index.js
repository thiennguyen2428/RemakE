import {Dimensions} from 'react-native';

const paddingBase = 8;

const TextSizeBase = 16;

export const Padding = {
  small: paddingBase / 2,
  base: paddingBase,
  normal: 1.5 * paddingBase,
  large: 2 * paddingBase,
  xlarge: 2.5 * paddingBase,
};

export const TextSize = {
  xsmal: TextSizeBase - 2,
  small: TextSizeBase - 1,
  normal: TextSizeBase,
};

export const LOGO_WIDTH = 50;

export const LOGO_HEIGHT = 50;

export const ICON_WIDTH = 24;

export const ICON_HEIGHT = 24;

export const HOME_BANNER_WIDTH = Dimensions.get('screen').width;

export const HOME_BANNER_ASPECT_RATIO = 16 / 9;

export const HOME_BANNER_SUB_HEIGHT = 2.5 * LOGO_HEIGHT;
