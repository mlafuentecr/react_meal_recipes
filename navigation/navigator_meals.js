import { Platform } from 'react-native';
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ScreenCategory from "../screens/Screen__Category";
import ScreenMeals from "../screens/Screen__CategoryMeals";
import ScreenMealDetail from "../screens/Screen__MealDetail";
import globalStyles from '../components/globalStyles';


const NavigatorMeal = createStackNavigator({
  Categories: {

    screen: ScreenCategory,
    
    navigationOptions:{
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? globalStyles.macColor : globalStyles.primary
      },
      headerTintColor: "#fff",
    }
  },
  CategoryMeals: {
    screen: ScreenMeals
  },

  MealDetails: ScreenMealDetail,

},

{

  defaultNavigationOptions:{
    headerTitle: 'XXDetailXX',
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? globalStyles.macColor : globalStyles.primary
    },
    headerTintColor: "#fff",
  }
  
}

);
export default createAppContainer(NavigatorMeal);
