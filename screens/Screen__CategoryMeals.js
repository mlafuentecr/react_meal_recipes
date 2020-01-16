import React from "react";
import { View, Text, StyleSheet, Button, Platform, FlatList} from "react-native";

import globalStyles from "../components/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Screen__CategoryMeals = props => {
 
//console.log(props);
  //console.log( displayMeals);
 

  const titleCat        = props.navigation.state.params.itemTitle;
  const displayMeals    = props.navigation.state.params.displayMeals;
  
  const remderMealItem = itemData => {
    return(  
      <TouchableOpacity onPress={props.onSelectMeal}>
      <View>
        <View style={globalStyles.mealRow}>
          <Text> {itemData.item.title} </Text>
        </View>

        <View style={globalStyles.mealRow}>
          <Text> {itemData.item.title} </Text>
        </View>
    </View>
    </TouchableOpacity>
    );
  }


  return (
    <View style={globalStyles.categoryWrapper}>
      <Text> meals Category title xxxxxfff </Text>
      <FlatList
      style={globalStyles.containerMeal}
      keyExtractor={(item, index) => item.id}
      data={displayMeals}
      renderItem={remderMealItem}
      numColumns={2}
    />

      <Button
        title="Go to Details "
        onPress={() => {
          //Also I can use navigate or push
          // puede cargar la misma pagina
          props.navigation.push("MealDetails", {
            itemTitle : titleCat,
          });
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
 
  const choosenTitle = navigation.state.params.itemTitle;

  return {
    
    headerTitle: "Detail category meal "+ choosenTitle,
    //headerTitle: headerTitle,

  }
};

// const styles = StyleSheet.create({});
export default Screen__CategoryMeals;
