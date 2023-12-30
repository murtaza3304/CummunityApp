import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icons from '../../../Assets/Icons';
import {SvgFromXml} from 'react-native-svg';
import theme from '../../../Assets/Themes/theme';
import CustomButton from './CustomButtom';
import CustomCard from './CustomCards';
import CustomBusinessCard from './CustomBusinessCard';
import {useNavigation} from '@react-navigation/native';

const Home = () => {

  const [activeCategory, setActiveCategory] = useState('');

  const navigation = useNavigation();
  const onpressCard = () => {
    navigation.navigate('UserScreen3');
  };

  const Location = () => {
    navigation.navigate('WhatLocation')
  }
  const BusinessCard = [
    {
      id: '1',
      imageLocation: require('../../../Assets/images/image1.jpg'),
      title: 'Software',
      buttonText: 'Ajit B',
    },
    {
      id: '2',
      imageLocation: require('../../../Assets/images/image4.jpeg'),
      title: 'Real Estate',
      buttonText: 'Vijay B',
    },
  ];
  const renderBusinessCard = ({item}) => (
    <CustomBusinessCard
      imageLocation={item.imageLocation}
      title={item.title}
      buttonText={item.buttonText}
    />
  );

  const Cards = [
    {
      id: '1',
      title: 'Rajkot',
      imageSource: require('../../../Assets/images/image1.jpg'),
    },
    {
      id: '2',
      title: 'Surat',
      imageSource: require('../../../Assets/images/image2.webp'),
    },

  ];
  const renderCardItams = ({item}) => (
    <CustomCard
      title={item.title}
      imageSource={item.imageSource}
      svgImage={item.svgImage}
      onpressCard={() => onpressCard()}
    />
  );
  const data = [
    {id: '1', title: 'Location'},
    {id: '2', title: 'Business'},
    {id: '3', title: 'People'},
    {id: '4', title: 'Family'},
  ];
  const renderItem = ({item}) => (
    <CustomButton
      title={item.title}
      onPress={() => handleCatagory(item.title)}
      isActive={item.title === activeCategory} 
    />
  );
  const handleCatagory = (category) => {
    setActiveCategory(category); 
  }


  const ToggleLocation = () => {
    navigation.navigate('WhatLocation')
  };
  

  return (
    <View style={styles.MainConatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.TopBar}>
          <Text style={[styles.Paragraph, {marginTop: 10}]}>Explore</Text>
          <TouchableOpacity style={styles.TopBar} onPress={ToggleLocation}>
            <SvgFromXml xml={Icons.LocationIcon} />
            <Text style={[styles.Paragraph, {marginHorizontal: 8}]}>
              Location API
            </Text>
            <SvgFromXml xml={Icons.DropDown} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.Heading}>Bhandare</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.SearchIcon} onPress={()=>Location()}>
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
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 5,
          }}>
          <Text style={[styles.Heading, {fontSize: 16}]}>Location</Text>
          <Text style={[styles.Paragraph, {color: theme.colors.BtnBgLight}]}>
            See all
          </Text>
        </View>
        <View>
          <FlatList
            data={Cards}
            keyExtractor={item => item.id}
            renderItem={renderCardItams}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <View>
          <Text style={[styles.Heading, {fontSize: 18}]}>Businesses</Text>
        </View>
        <View>
          <FlatList
            data={BusinessCard}
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={renderBusinessCard}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
  BtnContainer: {},
});
