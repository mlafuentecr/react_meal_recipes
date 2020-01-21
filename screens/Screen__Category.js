import React from "react";
import { CATEGORIES, MEALS} from "../myData/data";
import globalStyles from "../components/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from 'react-native-vector-icons/Ionicons';

import MealList from '../components/MealList';

const Screen__Category = props => {


  //console.log(props);
  return (
    <MealList  dataMeals={CATEGORIES}  navigation={props.navigation}/>
  );
};








Screen__Category.navigationOptions = () => {
 
  return {
  headerTitle: `Meal Category`,
  headerBackTitle: 'A much too long text for back button from B to A',
  headerTruncatedBackTitle: `to A`,

  
  headerStyle: {
      backgroundColor: 'red',
      color: 'white'
  }}

};



export default Screen__Category;
