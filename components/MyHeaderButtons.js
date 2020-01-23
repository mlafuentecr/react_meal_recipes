import * as React from 'react';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';

import Icon from 'react-native-vector-icons/Ionicons';


// define IconComponent, color, sizes and OverflowIcon in one place
const myButton = props => (
  <HeaderButton {...props} IconComponent={Icon} iconSize={23} color="white" />
);

export const MyHeaderButtons = props => {
  return (
    <HeaderButtons
      HeaderButtonComponent={myButton}
      OverflowIcon={<Icon name="ios-add" size={23} color="white" />}
      {...props}
    />
  );
};
export { Item } from 'react-navigation-header-buttons';  