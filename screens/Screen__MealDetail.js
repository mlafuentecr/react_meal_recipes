import React from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'

import { MEALS } from "../myData/data";
import globalStyles from '../components/globalStyles'


const Screen__MealDetail = props => {
   
    const { navigate} = props.navigation;
    
    //get defaulth this.props.navigation.getParam(paramName, defaultValue)
    // const catId =  props.navigation.getParam('categoryId');
    console.log(navigate);
    const displayMeals = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);
 
    const renderMealTitle = props =>{
        return (
            <View style={styles.item}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
          );
    }

 
    
    return (
    <View style={globalStyles.categoryWrapper}>
         <FlatList data={displayMeals}  keyExtractor={(item) => item.id} renderItem={'xxx'} />
    </View>);
};
const styles = StyleSheet.create({
    regularText: {
        marginTop: 50,
        color: 'black'
    }
});
export default Screen__MealDetail;