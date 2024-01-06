import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  
} from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import theme from '../../../Assets/Themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../Assets/Icons';
import CustomButton from './CustomButtom';
import CustomSearchHistory from './CustomSearchHistory';

const AlertScreen = () => {
  const Location = [
    {
      id: '1',
      Location: 'raajkot Gujrat',
    },
    {
      id: '2',
      Location: 'raajkot Gujrat',
    },
    {
      id: '3',
      Location: 'raajkot Gujrat',
    },
    {
      id: '4',
      Location: 'raajkot Gujrat',
    },
    {
      id: '5',
      Location: 'raajkot Gujrat',
    },
    {
      id: '6',
      Location: 'raajkot Gujrat',
    },
  ];
  const renderLocationItem = ({item}) =>(
    <CustomSearchHistory
    Heading= {item.Heading}
    Location= {item.Location} 
    TouchableOpacityStyle= {styles.TouchableOpacityStyle}
    ViewBox= {styles.ViewBox}
    TextStyles={styles.TextStyles}
    SvgImage={styles.SvgImage}
  />
  )
  return (
    <View style={styles.MainConatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%', justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.Heading}>Alert</Text>
        </View>
        <View>
          <FlatList
            data={Location}
            renderItem={renderLocationItem}
            horizontal={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({
  MainConatiner: {
    paddingHorizontal: 20,
    height: '100%',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 20
  },
  Heading: {
    fontSize: 22,
    marginBottom: 20,
    fontFamily: theme.fonts.PoppinsBold,
    color: theme.colors.Black,
  },
  TouchableOpacityStyle: {
    marginBottom: 15
  },
  ViewBox: {
    width: '100%',
    marginLeft:0,
  },
  SvgImage: {
    marginHorizontal: 8
  },
  TextStyles: {
    fontSize: 12
  }
});
