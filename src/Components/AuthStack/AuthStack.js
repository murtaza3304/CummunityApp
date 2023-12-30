import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen1 from '../Screens/Screen1'
import Register from '../Screens/Register/Register'
import PhoneAuthantication from '../Screens/Register/PhoneAuthantication'
import EmailAuthantication from '../Screens/Register/EmailAuthantication'
import Login from '../Screens/Register/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from '../AppStack/AppStack'

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="PhoneAuthantication" component={PhoneAuthantication} />
      <Stack.Screen name="EmailAuthantication" component={EmailAuthantication} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})