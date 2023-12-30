import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import AuthStack from './src/Components/AuthStack/AuthStack'
import AppStack from './src/Components/AppStack/AppStack'
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
   
   <NavigationContainer>
      <AuthStack/>
 </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})