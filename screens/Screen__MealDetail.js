import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import globalStyles from '../components/globalStyles'


const Screen__MealDetail = props => { 
    const headerTitle = props.navigation.state.params.itemTitle;
     //console.log(headerTitle);

    return (
    <View style={globalStyles.categoryWrapper}>
        <Text> detail Meal {headerTitle}</Text>
    </View>);

    
};

Screen__MealDetail.navigationOptions = {
    headerTitle: "Detail " ,
    headerBackTitle: "A much too long text for back button from B to A",
    headerTruncatedBackTitle: `to A`,
    headerStyle: {
        backgroundColor: '#515151'
    }
  };


const styles = StyleSheet.create({

});
export default Screen__MealDetail;