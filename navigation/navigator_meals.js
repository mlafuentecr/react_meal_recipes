import { Platform } from 'react-native';
import React from 'react';
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator  } from 'react-navigation-tabs';
//import Icon from "@expo/vector-icons/Icon";
import Icon from 'react-native-vector-icons/Ionicons';

import ScreenCategory from "../screens/Screen__Category";
import ScreenMeals from "../screens/Screen__CategoryMeals";
import ScreenMealDetail from "../screens/Screen__MealDetail";
import ScreenFavorites from "../screens/Screen__favorite";

import globalStyles from '../components/globalStyles';


const NavigatorMealMenu = createStackNavigator(
  {
 
    Categories: {
      screen: ScreenCategory,
      navigationOptions:{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? globalStyles.macColor : globalStyles.primary
        },
        headerTintColor: "#fff",
        headerTitle: " CategoriesG",
        headerBackTitle: "A much too long text for back button from B to A",
        headerTruncatedBackTitle: `to A`,
      }
    },

    
    CategoryMeals: {
      screen: ScreenMeals
    },

    MealDetails: ScreenMealDetail,

},

{
 
  defaultNavigationOptions:{
    //  headerTitle: 'xx',
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? globalStyles.macColor : globalStyles.primary
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: globalStyles.font_Size_Title
    },
    headerTintColor: "#fff",
  }
  
}

);


const TabStack = createBottomTabNavigator(
  {
  Meals:  {
    screen: NavigatorMealMenu,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: () =>  <Icon name="ios-restaurant" size={globalStyles.font_Size_icons} color={globalStyles.primary}  />
    }
   
}, 

  Favorites: {
    screen: ScreenFavorites,
    navigationOptions: {
      title: 'Favorites',
      tabBarIcon: () =>  <Icon name="md-heart" size={globalStyles.font_Size_icons} color={globalStyles.primary}  />
    }

  }

  
},{

 tabBarOptions: {
    showIcon: true,
    labelStyle: {
      fontSize: globalStyles.font_Size_primary,
      color: globalStyles.primary
    }
  }

}

);






// Favorites: FavoritesScreen,
export default createAppContainer(TabStack); // no tabs
//export default createAppContainer(MealsFavTabNav); //adding tabs buttom
