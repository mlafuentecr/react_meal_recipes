import React from "react";
import { View, Text, StyleSheet, Button, Platform} from "react-native";

import globalStyles from "../components/globalStyles";

const Screen__CategoryMeals = props => {
  // console.log(props.navigation.state.routeName);
  // console.log(navigation);

  //console.log(props.navigation.state.params.itemTitle);

  const titleCat = props.navigation.state.params.itemTitle;
  return (
    <View style={globalStyles.categoryWrapper}>
      <Text> meals Category title </Text>

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
 
 
 // console.log(headerTitle);

  return {
    headerTitle: "Detailx",
    //headerTitle: headerTitle,
 

  }
};

// const styles = StyleSheet.create({});
export default Screen__CategoryMeals;
