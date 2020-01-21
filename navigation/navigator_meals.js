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

const MyNavigationOptions ={

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
  navigationOptions: {
    title: 'Favorites',
    headerTitle: 'test',
    headerStyle: {
      backgroundColor: 'red'
  },
    tabBarIcon: ({tintColor}) =>  <Icon name="md-heart" size={globalStyles.font_Size_icons} color={tintColor}  />
  }

}




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
        //headerTitle: "Navigation meajl js title",
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
  defaultNavigationOptions: MyNavigationOptions
}

);



const NavigatorFavorite = createStackNavigator(
  {
    Favorites: ScreenFavorites,
    MealDetails: ScreenMealDetail,
  },    
  {
    defaultNavigationOptions: MyNavigationOptions
  }

);






//aca meto los dos menus y los integro

const TabStack = createBottomTabNavigator(
  {


  Meals:  {
    screen: NavigatorMealMenu,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>  <Icon name="ios-restaurant" size={globalStyles.font_Size_icons} color={tintColor}  />
    }
   
}, 

  Favorites: {
    //screen: ScreenFavorites, //aca le digo al navegador que use un screeen 
    screen: NavigatorFavorite, //aca le digo que use el stackNvigator de arriba
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>  <Icon name="ios-restaurant" size={globalStyles.font_Size_icons} color={tintColor}  />
    }
  }
  
},{

 tabBarOptions: {
    showIcon: true,
    activeTintColor: globalStyles.primary,
    inactiveTintColor: 'gray',
  
    labelStyle: {
      fontSize: globalStyles.font_Size_primary,
      //color: 'red' con este sobre escribo el activeTintColor
    },
    style: {
      //backgroundColor: 'blue',
    },
  }

}

);






// Favorites: FavoritesScreen,
export default createAppContainer(TabStack); // no tabs
//export default createAppContainer(MealsFavTabNav); //adding tabs buttom
