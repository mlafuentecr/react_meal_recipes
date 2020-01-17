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
      
      <View style={globalStyles.mealRow} >
        <TouchableOpacity onPress={props.onSelectMeal}  >
          <View style={globalStyles.detailTitle} ><Text> {itemData.item.title} </Text></View>
          <View><Text> {itemData.item.duration}m </Text></View>
        </TouchableOpacity>
    </View>
   
    );
  }


  return (
    <View style={globalStyles.wraperMeal}>
   
 
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={displayMeals}
      renderItem={remderMealItem}
      numColumns={1}
    />
 

    <View style={{ flexDirection: "row",  justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center',}}>
      <Button
        title="Go to Details "
        style={{ flex: 1, margin: 50, }}
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
        style={{ flex: 1, margin: 10,}}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
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
