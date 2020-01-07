import React from "react";
import { View, Text, StyleSheet, Button, Platform} from "react-native";

import globalStyles from "../components/globalStyles";
import { MEALS } from "../myData/data";


const Screen__CategoryMeals = props => {
  const catId = props.navigation.getParam('categoryId', 'dont have ID');
  console.log(catId);
  // const displayedMeals = MEALS.filter(
  //   meal => meal.categoryIds.indexOf(catId) >= 0
  // );
 
  //where categoryIds come from
 
 

  return (
    <View style={globalStyles.categoryWrapper}>
      <Text> mealsCategory1 </Text>

      <Button
        title="Go to Details "
        onPress={() => {
          //Also I can use navigate or push
          // puede cargar la misma pagina
          props.navigation.push("MealDetails");
        }}
      />

      {/* goBack or pop or popToTop para ir al padre*/}
      <Button
        title="Go to Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

Screen__CategoryMeals.navigationOptions = ({ navigation }) => {
  //el segundo parametro es si no encuentra el primero
  const headerTitle = navigation.getParam("itemTitle", "Meal Categories");

  return {
    headerTitle: headerTitle,
  }
};

// const styles = StyleSheet.create({});
export default Screen__CategoryMeals;
