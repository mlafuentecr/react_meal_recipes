import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import globalStyles from '../components/globalStyles'

const Screen__MealDetail = props => { 
    //const headerTitle = navigation.getParam("headerTitle", "Meal Categories");
     console.log(props.navigation);
    //const categoryTitle = itemData.item.title;

    return (
    <View style={globalStyles.categoryWrapper}>
        <Text> detail Meal </Text>
    </View>);
};

// Screen__MealDetail.navigationOptions = {
//     headerTitle: "Detail",
//     headerBackTitle: "A much too long text for back button from B to A",
//     headerTruncatedBackTitle: `to A`,
//     headerStyle: {
//         backgroundColor: '#515151'
//     }
//   };


const styles = StyleSheet.create({

});
export default Screen__MealDetail;