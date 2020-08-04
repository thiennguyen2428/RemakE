import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CategoryItem} from '../../components/CategoryItem';

// TODO
// List loading
// List refreshing
// List initial Data
// List item render
// List separator
// List direction

const isEmptyList = (data) =>
  !(data && Array.isArray(data) && data?.length > 0);

const ListStyles = StyleSheet.create({
  container: {
    flexShrink: 0,
    flexGrow: 0,
  },
});

export type ListProps = {
  data?: Array,
  isStatic?: Boolean,
  horizontal?: Boolean,
  numColumns?: Number,
  itemComponent: any,
};

export const List = (props: ListProps) => {
  if (isEmptyList(props.data)) {
    return null;
  }

  const keyExtractor = ({id = '', title = '', url = ''}, index) =>
    id || title || url ? `${id}-${title}-${url}-` : index;

  const renderItem = ({item}) => {
    return <CategoryItem {...item} />;
  };

  return (
    <FlatList
      style={ListStyles.container}
      show
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      {...props}
    />
  );
};

List.defaultProps = {
  data: [],
  isStatic: false,
  horizontal: false,
  numColumns: 1,
  itemComponent: null,
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
};
