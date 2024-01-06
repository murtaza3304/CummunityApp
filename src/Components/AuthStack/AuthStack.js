import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from '../Screens/Register/Register'
import PhoneAuthantication from '../Screens/Register/PhoneAuthantication'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from '../AppStack/AppStack'
import BasicDetails from '../AppStack/BottomTabScreen/Register2/BasicDetails'
import EnterLocation from '../AppStack/BottomTabScreen/Register2/EnterLocation';
import CompleteProfile from '../AppStack/BottomTabScreen/Register2/CompleteProfile';
import RegistrationDetail from '../AppStack/BottomTabScreen/Register2/RegistrationDetail';
import BottomTabs from '../AppStack/BottomTabScreen/BottomTabs';
import FamilyMembers from '../AppStack/BottomTabScreen/FamilyMembers';
import AddToBusiness from '../AppStack/BottomTabScreen/AddToBusiness';
import AddEducation from '../AppStack/BottomTabScreen/AddEducation';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="PhoneAuthantication" component={PhoneAuthantication} />
      <Stack.Screen name="AppStack" component={AppStack} />
      {/* AppStack Files */}
      <Stack.Screen name="BasicDetails" component={BasicDetails} />
      <Stack.Screen name="EnterLocation" component={EnterLocation} />
      <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
      <Stack.Screen name="RegistrationDetail" component={RegistrationDetail} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="FamilyMembers" component={FamilyMembers} />
      <Stack.Screen name="AddToBusiness" component={AddToBusiness} />
      <Stack.Screen name="AddEducation" component={AddEducation} />


    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})