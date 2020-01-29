import { Platform, Linking } from "react-native";
import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { MyHeaderButtons, Item } from "../components/MyHeaderButtons";
import Icon from "react-native-vector-icons/Ionicons";

import ScreenCategory from "../screens/Screen__Category";
import ScreenMeals from "../screens/Screen__CategoryMeals";
import ScreenMealDetail from "../screens/Screen__MealDetail";
import ScreenFavorites from "../screens/Screen__favorite";
import ScreenFilter from "../screens/Screen__filter";

import globalStyles from "../components/globalStyles";






const headerOptionsStyle = navData => {
  return {
    headerLeft: (
      <MyHeaderButtons>
        <Item
          title="add"
          iconName="md-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </MyHeaderButtons>
    ),
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? globalStyles.macColor : globalStyles.primary
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: globalStyles.font_Size_Title
    },
    headerTintColor: "white",
    navigationOptions: {
     
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="md-heart"
          size={globalStyles.font_Size_icons}
          color={tintColor}
        />
      )
    }
  };
};

const NavigatorMeal = createStackNavigator({
  MealsCat: {
    screen: ScreenCategory, 
    navigationOptions: {
      header: null
    }, 
  }
},{

}); 


const NavigatorFavorite = createStackNavigator({
  Favorites: {
    screen: ScreenFavorites, 
    navigationOptions: headerOptionsStyle, 
  },
  
},{
  // This is the default for screens in the stack, so `A` will
  // use this title unless it overrides it
  defaultNavigationOptions: {
    title: 'Favorites Title',
  },
}
);
const NavigatorFavoriteTabs = createStackNavigator({
  Favorites: {
    screen: ScreenFavorites, 
      navigationOptions: {
      header:null
    },
  }
},
);



{
  /* uso este createStackNavigator en filter para que exista un header */
}
const NavigatorFilter = createStackNavigator(
  {
    filterScreen: {
    screen: ScreenFilter,
    }
  },
  {
    // This is the default for screens in the stack, so `A` will
    // use this title unless it overrides it
    defaultNavigationOptions: {
      title: 'Favorites Title',
    },
  },
  {
    defaultNavigationOptions: headerOptionsStyle
  }

);




{
  /* aca meto los dos menus y los integro */
}

const BottomTab = createBottomTabNavigator(
  {
    Meals: {
      screen: NavigatorMeal,
  
    },

    Favorites: {
      /* screen: ScreenFavorites, //aca le digo al navegador que use un screeen */
      screen: NavigatorFavoriteTabs, /* aca le digo que use el stackNvigator de arriba */
   
    }
  },
  {
    initialRouteName: 'Meals',
  }
);




const DashboardStackNavigator = createStackNavigator(
  
{
    DashboardStackNavigator: {
      screen: BottomTab,
      navigationOptions:{
        title: `DashboarMain`, //del menu
      },
    }
     
},
{
  defaultNavigationOptions: headerOptionsStyle
}

); 

loadInBrowser = () => {
  Linking.openURL('https://google.com').catch(err => console.error("Couldn't load page", err));
};

{
  /* navigationOptions: headerOptionsStyle DrawerNavigator no pone el icono de hamburguesa solo maneja logica de abrir y cerrar */
}

const MainNavigator = createDrawerNavigator(
  {
    Menu: {
      screen: DashboardStackNavigator,
      navigationOptions:{
        title: `xxxx`, //del menu
      },
    },
    Filters:{
      screen: NavigatorFilter,
      navigationOptions:{
        headerTitle: `Filtersx`,
      },
      
    },
    Favorites:NavigatorFavorite,
    website: this.loadInBrowser
  },
  {
    initialRouteName: 'Menu',
  }
);


export default createAppContainer(MainNavigator);
{
  /*  export default createAppContainer(MealsFavTabNav); //adding tabs buttom */
}
