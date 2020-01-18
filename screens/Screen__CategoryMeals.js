import React from "react";
import { View, Text, StyleSheet, Button, Platform, FlatList, ImageBackground} from "react-native";

import globalStyles from "../components/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Screen__CategoryMeals = props => {
 
//console.log(props);
  //console.log( displayMeals);
 

  const titleCat        = props.navigation.state.params.itemTitle;
  const displayMeals    = props.navigation.state.params.displayMeals;
  const catId           = props.navigation.state.params.id;
  
  _mealSelect=()=>{
   props.navigation.navigate({routeName: "MealDetails", params:{
    itemTitle: titleCat,
    catId : catId,
    displayMeals: displayMeals
  }});
  }


  const remderMealItem = itemData => {
    return(  
      
      <View style={globalStyles.mealRow} >
        <TouchableOpacity  onPress={() => {
          props.navigation.navigate("MealDetails", {
          itemTitle: itemData.item.title,
          catId : catId,
          displayMeals: displayMeals
          });
        }}
        style={globalStyles.mealWrapper} >

          <View style={globalStyles.detailTitleWrap}>
            <ImageBackground source={{uri: itemData.item.imageUrl}}  style={globalStyles.detailImg} >
            </ImageBackground>
          </View>

          <View style={globalStyles.details}>
          <Text style={globalStyles.detailTitle} numberOfLines={1}> {itemData.item.title} </Text>
            <Text style={globalStyles.p5}> {itemData.item.duration}m </Text>
            <Text style={globalStyles.p5}> {itemData.item.complexity}</Text>
            <Text style={globalStyles.p5}> {itemData.item.affordability} </Text>
          </View>
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
    
    headerTitle: choosenTitle,
    //headerTitle: headerTitle,

  }
};

// const styles = StyleSheet.create({});
export default Screen__CategoryMeals;
