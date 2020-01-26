import React from "react";
import { CATEGORIES} from "../myData/data";
import MealList from '../components/MealList';


const Screen__Category = props => {
  return (
  
      <MealList 
      dataMeals={CATEGORIES}  
      navigation={props.navigation} />
 
  );
};


Screen__Category.navigationOptions = () => {
 
  return {
  headerTitle: `Meal Category`,
  headerBackTitle: 'A much too long text for back button from B to A',
  headerTruncatedBackTitle: `to A`,

  
  headerStyle: {
      color: 'white'
  }}

};



export default Screen__Category;
