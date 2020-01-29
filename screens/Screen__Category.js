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
 
//   return {
//   header: null, // como combino dos menus drawer y buttom tengo que quitar este header
//   headerTitle: `Meal Category`,
//   headerBackTitle: 'A much too long text for back button from B to A',
//   headerTruncatedBackTitle: `to A`,
// }

};



export default Screen__Category;
