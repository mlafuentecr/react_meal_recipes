import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import globalStyles from '../components/globalStyles'

const Screen__Favorite = props => {
    return (
    <View style={styles.categoryWrapper}>
        <Text> Favorite</Text>
    </View>);
};


Screen__Favorite.navigationOptions = ({ navigation }) => {
  
 
    return {
    headerTitle: `Favorites`,
    headerBackTitle: 'A much too long text for back button from B to A',
    headerTruncatedBackTitle: `to A`,
 
    }

  };


const styles = StyleSheet.create({

});
export default Screen__Favorite;