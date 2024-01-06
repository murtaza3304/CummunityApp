import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTabs from './BottomTabScreen/BottomTabs';
import SearchScreen3 from './BottomTabScreen/SearchScreen3';
import BasicDetails from './BottomTabScreen/Register2/BasicDetails';
import EnterLocation from './BottomTabScreen/Register2/EnterLocation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CompleteProfile from './BottomTabScreen/Register2/CompleteProfile';
import RegistrationDetail from './BottomTabScreen/Register2/RegistrationDetail';
import Home from './BottomTabScreen/Home';
import Register from '../Screens/Register/Register';
import FamilyMembers from './BottomTabScreen/FamilyMembers';


const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
    <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="SearchScreen3" component={SearchScreen3} />
      <Stack.Screen name="BasicDetails" component={BasicDetails} />
      <Stack.Screen name="EnterLocation" component={EnterLocation} />
      <Stack.Screen name='CompleteProfile' component={CompleteProfile} />
      <Stack.Screen name='RegistrationDetail' component={RegistrationDetail} />
      <Stack.Screen name='FamilyMembers' component={FamilyMembers} />
      {/* Auth files */}
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
