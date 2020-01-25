import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import FilterItem from '../components/filterItem'
import globalStyles from '../components/globalStyles'





//Para Switch hay que manejar el estado si el cliente
//dice true o false entonces hay que manejarlo con useState
const Screen__Filter = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    

    return (
        <View style={globalStyles.filterWrapper}>
        
        <FilterItem
        label={'Gluten Free'}
         swithState={isGlutenFree}
         onChange={newValue => setIsGlutenFree(newValue)} />


               <FilterItem
        label={'Lactose Free'}
         swithState={isLactoseFree}
         onChange={newValue => setIsLactoseFree(newValue)} />


                 <FilterItem
        label={'Vegan'}
         swithState={isVegan}
         onChange={newValue => setIsVegan(newValue)} />


<FilterItem
        label={'Vegetarian'}
         swithState={isVegetarian}
         onChange={newValue => setIsVegetarian(newValue)} />

    </View>);
};



// Screen__Filter.navigationOptions = {
//     headerTitle: `Filter Meals`,
//   };
  
Screen__Filter.navigationOptions = () => {
  
 
    return {
        headerTitle: `Filters`,
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: `to A`,
 
    }
      
      };



export default Screen__Filter;