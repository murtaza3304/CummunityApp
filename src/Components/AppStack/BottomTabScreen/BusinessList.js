import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import CustomCard from './CustomCards';
import React from 'react';
import theme from '../../../Assets/Themes/theme';

const BusinessList = () => {
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
    {
      id: '3',
      title: 'Surat',
      imageSource: require('../../../Assets/images/image2.webp'),
    },
    {
      id: '4',
      title: 'Surat',
      imageSource: require('../../../Assets/images/image3.jpg'),
    },
    {
      id: '5',
      title: 'Surat',
      imageSource: require('../../../Assets/images/image4.jpeg'),
    },
    {
      id: '6',
      title: 'bharat',
      imageSource: require('../../../Assets/images/image2.webp'),
    },
  ];
  const renderCardItams = ({item}) => (
    <CustomCard
      ImagesProps={styles.ImageStyles}
      MainCardContainer={styles.MainCardContainer}     
      title={item.title}
      imageSource={item.imageSource}
      svgImage={item.svgImage}
      onpressCard={() => onpressCard()}
    />
  );
  return (
    <View style={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.TextContainer}>
          <Text style={styles.Heading}>Business</Text>
        </View>
        <View style={styles.Container}>
          <FlatList
            data={Cards}
            keyExtractor={item => item.id}
            renderItem={renderCardItams}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BusinessList;

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  TextContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop: 10,
  },
  Heading: {
    fontFamily: theme.fonts.PoppinsBold,
    color: theme.colors.Black,
    fontSize: 31,
  },
 
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleInImage: {
    height: 25,
    top: 10,
  },
  TextStyles: {
    fontSize: 10,
  },
  MainCardContainer: {
    marginLeft: 8,
  },

});
