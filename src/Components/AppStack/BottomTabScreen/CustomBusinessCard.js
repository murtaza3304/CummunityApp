import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import Icons from '../../../Assets/Icons';
import theme from '../../../Assets/Themes/theme';

const CustomBusinessCard = ({ imageLocation, title, buttonText, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={imageLocation} style={styles.image} />
      <TouchableOpacity style={styles.TouchableOpacityBtn}>
        <Text style={{color: theme.colors.White, fontFamily: theme.fonts.PoppinsSemiBold}}>4N/5D</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.svgContainer}>
        <SvgFromXml xml={Icons.ContactIcon} style={styles.svgImage} />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 172,
    height: 140,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    margin: 8,
    padding: 8,
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 8,
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: theme.colors.Grey
  },
  svgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  svgImage: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  buttonText: {
    fontSize: 10,
    color: theme.colors.ParagraphColor
  },
  TouchableOpacityBtn: {
    position: 'absolute',
    right: 15, 
    bottom: 35,
    backgroundColor: theme.colors.darkGreenishBlue,
    paddingHorizontal: 7,
    borderColor: theme.colors.BackgroundUnselected,
    borderWidth: 1, 
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'center',
  }
});

export default CustomBusinessCard;
