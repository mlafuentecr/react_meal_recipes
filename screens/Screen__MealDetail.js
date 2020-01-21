import React from 'react'
import { View, Text, StyleSheet,  Button} from 'react-native'
import { MaterialHeaderButtons, Item } from '../components/MyHeaderButtons';

import globalStyles from '../components/globalStyles'


const Screen__MealDetail = props => { 
    const headerTitle = props.navigation.state.params.itemTitle;
     //console.log(headerTitle);

    return (
    <View style={globalStyles.categoryWrapper}>
        <Text> detail Meal {headerTitle}</Text>

        <View style={{ flexDirection: "row",  justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center',}}>


      {/* goBack or pop or popToTop para ir al padre*/}
      <Button
        title="Go to Back"
        style={{ flex: 1, margin: 10,}}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>

    </View>);

    
};


Screen__MealDetail.navigationOptions = ({ navigation }) => {
  
 
    return {
    headerTitle: `${navigation.state.params.itemTitle}`,
    headerBackTitle: 'A much too long text for back button from B to A',
    headerTruncatedBackTitle: `to A`,
    headerRight: (
      <MaterialHeaderButtons>
        <Item title="add" iconName="md-heart" onPress={() => console.warn('Mark as favorite!')} />
    </MaterialHeaderButtons>
    ),
    
    // headerStyle: {
    //     backgroundColor: 'red',
    //     color: 'white'
    // }
  
  }

  };





const styles = StyleSheet.create({

});
export default Screen__MealDetail;