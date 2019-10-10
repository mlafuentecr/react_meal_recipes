import { createAppContainer   } from 'react-navigation'                ;
import { createStackNavigator } from 'react-navigation-stack'          ;
import   ScreenCategory         from '../screens/Screen__Category'
import   ScreenMeals            from '../screens/Screen__CategoryMeals'
import   ScreenMealDetail       from '../screens/Screen__MealDetail'

const NavigatorMeal = createStackNavigator({
    Categories: ScreenCategory,
    CategoryMeals : ScreenMeals,
    MealDetails: ScreenMealDetail,
    
});
export default createAppContainer(NavigatorMeal);