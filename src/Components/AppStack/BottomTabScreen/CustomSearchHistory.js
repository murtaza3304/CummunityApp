import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../../../Assets/Themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../Assets/Icons';

const CustomSearchHistory = ({ImageSource, Heading, Location}) => {
  return (
    <View style={styles.SearchHistoryContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={ImageSource} style={styles.Image} />
        <View style={styles.ViewBorder}>
          <Text style={styles.Heading}>{Heading}</Text>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <SvgFromXml xml={Icons.LocationIcon} />
            <Text style={styles.Paragraph}>{Location}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomSearchHistory;

const styles = StyleSheet.create({
  SearchHistoryContainer: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 12,
  },
  Paragraph: {
    color: theme.colors.ParagraphColor,
    fontSize: 10,
  },
  Image: {
    width: 42,
    height: 42,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 1, 
  },
  Heading: {
    fontSize: 12,
    fontFamily: theme.fonts.PoppinsBold,
    color: theme.colors.Black,
    marginLeft: 15
  },
  TouchableOpacity: {
    flexDirection: 'row',
    marginLeft: 15
  },
  ViewBorder: {
    borderColor: theme.colors.BorderInactiveColor,
    borderWidth: 1,
    width: '90%',
    borderRadius: 20,
    marginLeft: 29,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  }
});
