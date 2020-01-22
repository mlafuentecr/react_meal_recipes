import React from "react";
import { View, Text, FlatList } from "react-native";
import { CATEGORIES, MEALS} from "../myData/data";
import globalStyles from "../components/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";




const MealList = props => {

  
  const renderGridItem = itemData => {

    const categoryTitle   = itemData.item.title;
    const catId           = itemData.item.id;
    const displayMeals    = MEALS.filter( meals => meals.categoryIds.indexOf(catId) >= 0);
    
    return (
        <View style={globalStyles.mealWrapper } >
     
      <TouchableOpacity style={globalStyles.MealItem } 
        onPress={() => {
            props.navigation.navigate("CategoryMeals", {
            itemTitle: categoryTitle,
            catId : catId,
            displayMeals: displayMeals
          });
        }}
      >
      
            <View style={globalStyles.font_Size_primary} >
            <Text> {categoryTitle} {catId}  </Text>
            </View>
       
      </TouchableOpacity>
      
      </View>
    );
  };
 
  //console.log(props); 
  return (
//para flat list no se usa style se usa contentContainerStyle
    <FlatList
      contentContainerStyle={globalStyles.flatlist}
      keyExtractor={(item, index) => item.id}
      data={props.dataMeals}
      renderItem={renderGridItem}
      numColumns={2}
    />
   
  );
};




export default MealList;

