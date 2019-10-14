import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import globalStyles from '../components/globalStyles'


const Screen__CategoryMeals = props => {
  
  console.log(props.navigation.state.routeName);
  
    return (
    <View style={globalStyles.wrapper}>
        <Text> mealsCategory</Text>
       
        <Button
        title="Go to Details"
        onPress={() => {
            //Also I can use navigate or push
            // puede cargar la misma pagina 
          props.navigation.push('MealDetails')
        }}
      />

      {/* goBack or pop or popToTop para ir al padre*/}
      <Button 
       title="Go to Back"
      onPress={() => {
          props.navigation.goBack()
      }} />
    </View>);
};

Screen__CategoryMeals.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: globalStyles.primary,
    color: 'white'
  }
};




const styles = StyleSheet.create({

});
export default Screen__CategoryMeals;