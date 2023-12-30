import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  
} from 'react-native';
import { useState } from 'react';
import React from 'react';
import theme from '../../../Assets/Themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../Assets/Icons';
import CustomButton from './CustomButtom';
import CustomSearchHistory from './CustomSearchHistory';

const SearchScreen3 = () => {
  const data = [
    {id: '1', title: 'Location'},
    {id: '2', title: 'Business'},
    {id: '3', title: 'People'},
    {id: '4', title: 'Family'},
  ];
  const renderItem = ({item}) => (
    <CustomButton
      title={item.title}
      onPress={() => handleButtonPress(item.id)}
    />
  );
  const Location = [
    {
      id: '1',
      ImageSource: require('../../../Assets/images/image1.jpg'),
      Heading: 'Raaj Industry',
      Location: 'raajkot Gujrat',
    },
    {
      id: '2',
      ImageSource: require('../../../Assets/images/image1.jpg'),
      Heading: 'Raaj Industry',
      Location: 'raajkot Gujrat',
    },
    {
      id: '3',
      ImageSource: require('../../../Assets/images/image1.jpg'),
      Heading: 'Raaj Industry',
      Location: 'raajkot Gujrat',
    },
    {
      id: '4',
      ImageSource: require('../../../Assets/images/image1.jpg'),
      Heading: 'Raaj Industry',
      Location: 'raajkot Gujrat',
    },
    {
      id: '5',
      ImageSource: require('../../../Assets/images/image1.jpg'),
      Heading: 'Raaj Industry',
      Location: 'raajkot Gujrat',
    },
    {
      id: '6',
      ImageSource: require('../../../Assets/images/image1.jpg'),
      Heading: 'Raaj Industry',
      Location: 'raajkot Gujrat',
    },
  ];
  const renderLocationItem = ({item}) =>(
    <CustomSearchHistory
    ImageSource= {item.ImageSource}
    Heading= {item.Heading}
    Location= {item.Location}
    
  />
  )
  return (
    <View style={styles.MainConatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.TopBar}>
          <Text style={[styles.Paragraph, {marginTop: 10}]}></Text>
          <TouchableOpacity style={styles.TopBar}>
            <SvgFromXml xml={Icons.LocationIcon} />
            <Text style={[styles.Paragraph, {marginHorizontal: 8}]}>
              Location API
            </Text>
            <SvgFromXml xml={Icons.DropDown} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.Heading}>Search</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.SearchIcon}>
            <SvgFromXml xml={Icons.SearchIcon} style={{marginLeft: 15}} />
            <TextInput
              placeholder="Find people, Business, etc"
              style={styles.PlaceHolder}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.BtnContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{marginTop: 2}}>
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

export default SearchScreen3;

const styles = StyleSheet.create({
  MainConatiner: {
    paddingHorizontal: 20,
    height: '100%',
  },
  TopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  Paragraph: {
    color: theme.colors.ParagraphColor,
    fontSize: 14,
  },

  Heading: {
    fontSize: 31,
    fontFamily: theme.fonts.PoppinsBold,
    color: theme.colors.Black,
  },
  SearchIcon: {
    backgroundColor: 'red',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.LightBlue,
    paddingVertical: 3,
    marginTop: 8,
  },
  PlaceHolder: {
    marginLeft: 7,
  },
});
