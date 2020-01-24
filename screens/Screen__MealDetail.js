import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, Button} from 'react-native'
import { MyHeaderButtons, Item } from '../components/MyHeaderButtons';

import globalStyles from '../components/globalStyles'
import { ScrollView } from 'react-native';


const Screen__MealDetail = props => { 
    const headerTitle   = props.navigation.getParam('itemTitlex');
    const imageUrlx     = props.navigation.getParam('imageUrlx');
    const duration      = props.navigation.getParam('duration');
    const complexity    = props.navigation.getParam('complexity');
    const affordability = props.navigation.getParam('affordability');
    const ingredients = props.navigation.getParam('ingredients');
  
     console.log(props.navigation);

    return (
      <ScrollView>
    <View style={globalStyles.categoryWrapper}>
  
      <View style={globalStyles.detailTitleWrap}>
        <ImageBackground source={{uri: imageUrlx}}   style={globalStyles.detailImg} >
        </ImageBackground>
      </View>

      <View style={globalStyles.details}>
          <Text style={globalStyles.detailTitle} numberOfLines={1}> {headerTitle} </Text>
            <Text style={globalStyles.p5}> {duration}m </Text>
            <Text style={globalStyles.p5}> {complexity}</Text>
            <Text style={globalStyles.p5}> {affordability} </Text>
          </View>

          <View style={globalStyles.details}>
          <Text style={globalStyles.detailTitle}> Details </Text>
          <Text style={globalStyles.detailListWrapper}> 
            {ingredients.map(Item => (
              <Text style={globalStyles.detailList} key={Item}> { Item }</Text>
            ))}
          </Text>
            <Text style={globalStyles.p5}> {ingredients} </Text>
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
    headerTitle: `${navigation.getParam('itemTitlex')}`,
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