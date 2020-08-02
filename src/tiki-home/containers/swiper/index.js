import React from 'react';
import {View, StyleSheet} from 'react-native';

import Swiper from 'react-native-swiper';

import {HOME_BANNER_WIDTH, Padding} from '../../theme';
import {Banner} from '../../components/Banner';

import MockData from '../../mock/MockBanner.json';

const styles = StyleSheet.create({
  container: {flex: 0},
  paginationContainer: {
    bottom: 3.5 * Padding.small,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    width: HOME_BANNER_WIDTH,
  },
  pagination: {
    width: 10,
    height: 1.5,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 1,
  },
  activePagination: {
    width: 10,
    height: 1.5,
    backgroundColor: 'white',
    marginHorizontal: 1,
  },
});

const ItemPagination = (props) => {
  if (props.total <= 0) {
    return null;
  }

  return (
    <View style={styles.paginationContainer}>
      {Array.from(Array(props.total).keys()).map((_, i) => {
        return (
          <View
            key={i}
            style={
              props.index === i ? styles.activePagination : styles.pagination
            }
          />
        );
      })}
    </View>
  );
};

export const FullWidthSwipeContainer = (props) => {
  const width = HOME_BANNER_WIDTH;
  const height = HOME_BANNER_WIDTH / props.aspectRatio;

  const itemWidth = HOME_BANNER_WIDTH - 2 * Padding.normal;

  const renderPagination = (index, total) => (
    <ItemPagination index={index} total={total} />
  );

  return (
    <Swiper
      width={width}
      height={height}
      loop={props.loop}
      autoplay={props.autoplay}
      containerStyle={styles.container}
      renderPagination={renderPagination}
      showsPagination={props.showsPagination}>
      {MockData.map((item) => {
        return (
          <Banner
            {...item}
            key={item.id}
            width={itemWidth}
            url={item.mobile_url}
          />
        );
      })}
    </Swiper>
  );
};

FullWidthSwipeContainer.defaultProps = {
  loop: true,
  autoplay: true,
  aspectRatio: 3.1,
  showsPagination: true,
};
