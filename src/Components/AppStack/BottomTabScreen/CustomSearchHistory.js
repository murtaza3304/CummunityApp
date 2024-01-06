import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../../../Assets/Themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../Assets/Icons';

const CustomSearchHistory = ({ImageSource, Heading, Location, TouchableOpacityStyle, ViewBox, SvgImage, TextStyles, SvgXmlIcons}) => {
  return (
    <View style={styles.SearchHistoryContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={ImageSource} style={styles.Image} />
        <View style={[styles.ViewBorder, ViewBox]}>
          <Text style={styles.Heading}>{Heading}</Text>
          <TouchableOpacity style={[styles.TouchableOpacity, TouchableOpacityStyle]}>
            <SvgFromXml xml={[Icons.LocationIcon, SvgXmlIcons]} style={SvgImage}/>

            <Text style={[styles.Paragraph, TextStyles]}>{Location}</Text>
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
    borderRadius: 10,
  },
  Paragraph: {
    color: theme.colors.ParagraphColor,
    fontSize: 10,
  },
  Image: {
    width: 42,
    height: 42,
    borderRadius: 60,
    position: 'absolute',
    zIndex: 1, 
  },
  Heading: {
    fontSize: 12,
    fontFamily: theme.fonts.PoppinsBold,
    color: theme.colors.Black,
    marginLeft: 23,
    marginTop:2
  },
  TouchableOpacity: {
    flexDirection: 'row',
    marginLeft: 18,
  },
  ViewBorder: {
    borderColor: theme.colors.BorderInactiveColor,
    borderWidth: 1,
    width: '90%',
    borderRadius: 20,
    marginLeft: 29,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 2
  }
});
