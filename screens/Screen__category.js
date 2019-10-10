import React from "react";
import { View, Text, StyleSheet, Button, FlatList} from "react-native";

import { CATEGORIES } from '../myData/data'
import globalStyles from "../components/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";


const Screen__Category = props => {

  const renderGridItem = (itemData) =>{
    return (
    <TouchableOpacity onPress={()=>{
        props.navigation.push('CategoryMeals')
    }}>
      <View style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
    )
  }

  
  //console.log(props);
  return (
    <FlatList
     keyExtractor={(item, index)=>item.id} 
     data={CATEGORIES} 
     renderItem={renderGridItem} 
     numColumns={2} />
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  gridItem:{
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'center'
    
  }
});
export default Screen__Category;
