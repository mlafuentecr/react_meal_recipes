import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS} from "../myData/data";
import globalStyles from "../components/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";




const MealList = props => {

  
  const renderGridItem = itemData => {

    const categoryTitle   = itemData.item.title;
    const catId           = itemData.item.id;
    const displayMeals    = MEALS.filter( meals => meals.categoryIds.indexOf(catId) >= 0);
    
    return (
      <TouchableOpacity
      style={styles.gridItem} 
        onPress={() => {
            props.navigation.navigate("CategoryMeals", {
            itemTitle: categoryTitle,
            catId : catId,
            displayMeals: displayMeals
          });
        }}
      >
        <View style={styles.font_Size_primary} >
          <Text> {categoryTitle} {catId}  </Text>
        </View>
      </TouchableOpacity>
    );
  };
 
  //console.log(props);
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={props.dataMeals}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};



const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: "5%",
    minHeight: 110,
    minWidth: "40%",
    backgroundColor: globalStyles.secondLight,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});
export default MealList;

