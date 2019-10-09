import { createStackNavigator } from 'react-navigation'
import ScreenCategory from '../screens/Screen__category'
import ScreenMeals from '../screens/Screen__CategoryMeals'
import ScreenMealDetail from '../screens/Screen__MealDetail'

createStackNavigator({
    Categories: ScreenCategory,
    CategoryMeals : ScreenMeals,
    MealDetails: ScreenMealDetail,
    
});