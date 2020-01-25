import React  from 'react'

import { Text, View , Switch} from 'react-native'
import globalStyles from '../components/globalStyles'


const filterItem = props => {
   
        return (
            <View style={globalStyles.filterItem}>
            <Text style={globalStyles.filterText}> {props.label} </Text>
       
           <Switch value={props.swithState} 
               trackColor={{true: globalStyles.secondLight}} //este es como el style
               thumbColor={globalStyles.primary}
               onValueChange ={props.onChange}
           /> 
         </View>

        )
    }


    export default filterItem;
