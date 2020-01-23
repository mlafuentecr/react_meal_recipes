import React from 'react'
import { View, Text, Image, StyleSheet,  Button} from 'react-native'
import { MyHeaderButtons, Item } from '../components/MyHeaderButtons';

import globalStyles from '../components/globalStyles'
import { ScrollView } from 'react-native';


const Screen__MealDetail = props => { 
    const headerTitle = props.navigation.state.params.itemTitle;
    const imageUrl = props.navigation.state.params.imageUrl;

     console.log(imageUrl);

    return (
      <ScrollView>
    <View style={globalStyles.categoryWrapper}>
       

        <View>
         <Text> detail Meal {headerTitle}</Text>
        
        </View>

      {/* goBack or pop or popToTop para ir al padre*/}
      <Button
        title="Go to Back"
        style={{ flex: 1, margin: 10,}}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
   

    </View>
    </ScrollView>);

    
};


Screen__MealDetail.navigationOptions = ({ navigation }) => {
  
 
    return {
    headerTitle: `${navigation.state.params.itemTitle}`,
    headerBackTitle: 'A much too long text for back button from B to A',
    headerTruncatedBackTitle: `to A`,
    headerRight: (
      <MyHeaderButtons>
        <Item title="add" iconName="md-heart" onPress={() => console.warn('Mark as favorite!')} />
    </MyHeaderButtons>
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