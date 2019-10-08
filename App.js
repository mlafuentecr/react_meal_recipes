import React { state }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'

import globalStyles from '../components/globalStyles'

const fetchFonts =() =>{
  return Font.loadAsync({
    'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}
export default function App() {
  const [fontLoaded, setFontLoaded ] = setState(false)

  if(!fontLoaded){
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
    )
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
