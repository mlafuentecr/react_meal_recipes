import { MEALS} from '../../myData/data'

const initialState ={
  meals: MEALS ,
  filterMeals: MEALS,
  favoriteMeals: [],
}


//aca le digo que cuando empiece redux utilice como initial state initialState
const mealsReducer = (state = initialState, action) =>{
  return state;
}

export default mealsReducer;