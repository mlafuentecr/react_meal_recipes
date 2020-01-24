import React from "react";
import { View, Text, StyleSheet, Button, Platform, FlatList, ImageBackground} from "react-native";

import globalStyles from "../components/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Screen__CategoryMeals = props => {
 
//console.log(props);
  console.log('cat '+ props.navigation.getParam('catId'));
 

  const titleCat        = props.navigation.state.params.itemTitle;
  const displayMeals    =props.navigation.getParam('displayMeals');
  const catId           = props.navigation.getParam('catId');
  
  // _mealSelect=()=>{
  //  props.navigation.navigate({routeName: "MealDetails", params:{
  //   itemTitle: titleCat,
  //   catId : catId,
  //   uri:  imageUrl,
  //   displayMeals: displayMeals
  // }});
  // }


  const remderMealItem = itemData => {
  
    return(  
      
      <View style={globalStyles.mealRow} >
        
        <TouchableOpacity  onPress={() => {
          props.navigation.navigate("MealDetails", {
          itemTitlex: itemData.item.title,
          catId: itemData.item.categoryIds,
          idx: itemData.item.id,
          imageUrlx: itemData.item.imageUrl,
          duration: itemData.item.duration,
          complexity: itemData.item.complexity,
          affordability: itemData.item.affordability,
          ingredients: itemData.item.ingredients
          });
        }}
        style={globalStyles.mealWrapperDetail} >

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
          props.navigation.push("MealDetails", {//itemTitle : titleCat,
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
 
  //console.log(navigation);

  const choosenTitle      = navigation.state.params.itemTitle;
  const titleCat          = navigation.state.params.itemTitle;
  //console.log(choosenTitle+'  '+titleCat);


  return {
    
    headerTitle: choosenTitle,
    //headerTitle: headerTitle,

  }
};

// const styles = StyleSheet.create({});
export default Screen__CategoryMeals;
