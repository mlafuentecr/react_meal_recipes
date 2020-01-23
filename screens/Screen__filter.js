import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import globalStyles from '../components/globalStyles'

const Screen__Filter = props => {
    return (
        <View style={globalStyles.categoryWrapper}>
        <Text> filter</Text>
    </View>);
};



// Screen__Filter.navigationOptions = {
//     headerTitle: `Filter Meals`,
//   };
  
Screen__Filter.navigationOptions = () => {
  
 
    return {
        headerTitle: `Filters`,
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: `to A`,
 
    }
      
      };



export default Screen__Filter;