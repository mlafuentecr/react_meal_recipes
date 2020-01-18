import React from 'react'
import { View, Text, StyleSheet,  Button} from 'react-native'
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { HeaderButton } from '../components/HeaderButton';

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


// const HeaderButton  = props => {
//         return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color="white" />
//     }



Screen__MealDetail.navigationOptions = ({ navigation }) => {
  
 
    return {
    headerTitle: `${navigation.state.params.itemTitle}`,
    headerBackTitle: 'A much too long text for back button from B to A',
    headerTruncatedBackTitle: `to A`,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="fav" iconName="star" onPress={() => alert('fav')} />
    </HeaderButtons>,
    
    headerStyle: {
        backgroundColor: '#515151'
    }}

  };





const styles = StyleSheet.create({

});
export default Screen__MealDetail;