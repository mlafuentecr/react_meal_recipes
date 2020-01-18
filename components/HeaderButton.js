import * as React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons} from 'react-native-vector-icons/Ionicons';


import globalStyles from '../components/globalStyles';


const CustomHeaderButton = props => {


    // define IconComponent, color, sizes and OverflowIcon in one place
return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color="blue" />;

}

export default CustomHeaderButton;