import { Platform } from 'react-native';
import React from 'react';

import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator  } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { MyHeaderButtons, Item } from '../components/MyHeaderButtons';
//import Icon from "@expo/vector-icons/Icon";
import Icon from 'react-native-vector-icons/Ionicons';

import ScreenCategory from "../screens/Screen__Category";
import ScreenMeals from "../screens/Screen__CategoryMeals";
import ScreenMealDetail from "../screens/Screen__MealDetail";
import ScreenFavorites from "../screens/Screen__favorite";
import ScreenFilter from "../screens/Screen__filter";

import globalStyles from '../components/globalStyles';




//Header Style
const headerOptionsStyle =(navData) =>{

  return{
    //  headerTitle: 'xx',
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
      title: 'Favorites',
      headerTitle: 'test',
      headerStyle: {
        backgroundColor: 'red'
    },
      tabBarIcon: ({tintColor}) =>  <Icon name="md-heart" size={globalStyles.font_Size_icons} color={tintColor}  />
    }
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
  defaultNavigationOptions: headerOptionsStyle
}

);



const NavigatorFavorite = createStackNavigator(
  {
    Favorites: ScreenFavorites,
    MealDetails: ScreenMealDetail,
    
  },    
  {
    defaultNavigationOptions: headerOptionsStyle
  }

);






//aca meto los dos menus y los integro

const BottomTab = createBottomTabNavigator(
  {
 
  Meals:  {
    screen: NavigatorMealMenu,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>  <Icon name="ios-restaurant" size={globalStyles.font_Size_icons} color={globalStyles.primary}  />
    }
   
}, 

  Favorites: {
    //screen: ScreenFavorites, //aca le digo al navegador que use un screeen 
    screen: NavigatorFavorite, //aca le digo que use el stackNvigator de arriba
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>  <Icon name="md-heart" size={globalStyles.font_Size_icons} color={globalStyles.primary}  />
    }
  } 
},
  
 
{

 tabBarOptions: {
    showIcon: true,
    activeTintColor: globalStyles.primary,
    inactiveTintColor: 'gray',
  
    labelStyle: {
      fontSize: globalStyles.font_Size_primary,
     /// color: 'red' ///con este sobre escribo el activeTintColor
    },
    style: {
      //backgroundColor: 'blue',
    },
  }

},{
  navigationOptions:{
    drawerLabel: 'Meals',
  }
},

);


//uso este createStackNavigator en filter para que exista un header
const FilterNavigator = createStackNavigator(
  {
    filterScreen: ScreenFilter,
  },    
 
 
  {
    navigationOptions:{
      drawerLabel: 'Filters',
    },
    defaultNavigationOptions: headerOptionsStyle
  }
);
// FilterNavigator.navigationOptions = {
//   drawerLabel: 'Home!',
// };


/// DrawerNavigator no pone el icono de hamburguesa solo maneja logica de abrir y cerrar

const MainNavigator = createDrawerNavigator(
  {
   
    BottomTab: BottomTab,
    filter: FilterNavigator 
  },    
 
  {
    contentOptions: {
      activeTintColor: globalStyles.primary,
      itemsContainerStyle: {
        marginVertical: 0,
      },
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 20,
      },
    }
  }
 
  );

//  filterScreen: ScreenFilter,  

// Favorites: FavoritesScreen,
export default createAppContainer(MainNavigator); // no tabs
//export default createAppContainer(MealsFavTabNav); //adding tabs buttom
