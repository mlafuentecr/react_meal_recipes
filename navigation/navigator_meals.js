import { Platform } from 'react-native';
import React from 'react';

import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator  } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { MyHeaderButtons, Item } from '../components/MyHeaderButtons';
import Icon from 'react-native-vector-icons/Ionicons';

import ScreenCategory from "../screens/Screen__Category";
import ScreenMeals from "../screens/Screen__CategoryMeals";
import ScreenMealDetail from "../screens/Screen__MealDetail";
import ScreenFavorites from "../screens/Screen__favorite";
import ScreenFilter from "../screens/Screen__filter";

import globalStyles from '../components/globalStyles';





const headerOptionsStyle =(navData) =>{

  return{
   
      headerLeft: (
        <MyHeaderButtons>
          <Item title="add" iconName="md-menu" onPress={() => {
            navData.navigation.toggleDrawer();
          }} />
      </MyHeaderButtons>
      ),
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
        headerStyle: {
          backgroundColor: 'red'
      }, 
      tabBarIcon: ({tintColor}) =>  <Icon name="md-heart" size={globalStyles.font_Size_icons} color={tintColor}  />
    }
}
}




{/* aca meto los dos menus y los integro */}
const BottomTab = createBottomTabNavigator(
  {
 
  Meals:  {
    screen: ScreenCategory,
    navigationOptions:headerOptionsStyle
   
}, 

  Favorites: {
    /* screen: ScreenFavorites, //aca le digo al navegador que use un screeen */
    screen: ScreenFavorites, /* aca le digo que use el stackNvigator de arriba */
    navigationOptions:headerOptionsStyle
  }
  
},
 

{ 
  initialRouteName: 'Meals'
}

);




const NavigatorMeal = createStackNavigator(
  {
    MealsCat: {
      screen:  ScreenCategory,
      navigationOptions:headerOptionsStyle
    },
  }

);


const NavigatorFavorite = createStackNavigator(
  {
    Favorites:  {
      screen:  ScreenFavorites,
      navigationOptions:headerOptionsStyle
    },

  }
);

{/* uso este createStackNavigator en filter para que exista un header */} 
const NavigatorFilter = createStackNavigator(
  {
    
        filterScreen: {
          screen:ScreenFilter,
          navigationOptions:headerOptionsStyle
        },
  }
  );





{/* DrawerNavigator no pone el icono de hamburguesa solo maneja logica de abrir y cerrar */} 

const MainNavigator = createDrawerNavigator(
  {
  Meals: NavigatorMeal,
  Favorites: NavigatorFavorite,
  filterScreen: NavigatorFilter,
  },    

  {
    initialRouteName: 'Meals',
    }
  );



export default createAppContainer(MainNavigator); 
{/*  export default createAppContainer(MealsFavTabNav); //adding tabs buttom */} 
