import React from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { CATEGORIES } from "../myData/data";
import globalStyles from "../components/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Screen__Category = props => {

  
  const renderGridItem = itemData => {

    const categoryTitle = itemData.item.title;
    
    return (
      <TouchableOpacity
      style={styles.gridItem} 
        onPress={() => {
          props.navigation.navigate("CategoryMeals", {
            itemTitle: categoryTitle,
            catId : "xxxx",
          });
        }}
      >
        <View categoryTitle={categoryTitle} >
          <Text>{categoryTitle} </Text>
        </View>
      </TouchableOpacity>
    );
  };
 
  //console.log(props);
  return (
    <FlatList
      style={globalStyles.container}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

Screen__Category.navigationOptions = {
  headerTitle: " Categories",
  headerBackTitle: "A much too long text for back button from B to A",
  headerTruncatedBackTitle: `to A`,
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: "5%",
    minHeight: 110,
    minWidth: "40%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});
export default Screen__Category;
