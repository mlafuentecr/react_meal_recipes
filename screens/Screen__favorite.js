import React from 'react'
import { MEALS} from "../myData/data";
import MealList from '../components/MealList';



const Screen__Favorite = props => {
    const favData = MEALS.filter( meals => meals.id === 'm1' || meals.id === 'm2');
    return (
      <MealList  
      dataMeals={favData}  
      navigation={props.navigation} />
    );
  };
  

Screen__Favorite.navigationOptions = () => {
  
 
    return {
        headerTitle: `Favorites`,
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: `to A`,
      
        
        // headerStyle: {
        //     backgroundColor: 'red',
        //     color: 'white'
        // }
    }
      
      };


export default Screen__Favorite;