import React, {useState} from 'react'
import { View,  } from 'react-native'

import FilterItem from '../components/filterItem'
import globalStyles from '../components/globalStyles'





const Screen__Filter = props => {

    const [isGlutenFree, setIsGlutenFree]   = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan]             = useState(false);
    const [isVegetarian, setIsVegetarian]   = useState(false);

    return (
        <View style={globalStyles.filterWrapper}>
        
        <FilterItem
        label={'Gluten Free'}
         swithState={isGlutenFree}
         onChange={newValue1 => setIsGlutenFree(newValue1)} />


               <FilterItem
        label={'Lactose Free'}
         swithState={isLactoseFree}
         onChange={newValue2 => setIsLactoseFree(newValue2)} />


                 <FilterItem
        label={'Vegan'}
         swithState={isVegan}
         onChange={newValue3 => setIsVegan(newValue3)} />


<FilterItem
        label={'Vegetarian'}
         swithState={isVegetarian}
         onChange={newValue4 => setIsVegetarian(newValue4)} />

    </View>);
};


Screen__Filter.navigationOptions = () => {
  
 
    return {
        headerTitle: `Filters`,
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: `to A`,
 
    }
      
      };



export default Screen__Filter;