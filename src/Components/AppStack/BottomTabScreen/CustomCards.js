import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../Assets/Icons';
import theme from '../../../Assets/Themes/theme';

const CustomCard = ({
  title,
  imageSource,
  onpressCard,
  ImagesProps,
  MainCardContainer,
  TitleInImage,
  BottomBtn,
  TextStyles,
}) => {
  return (
    <TouchableOpacity
      style={[MainCardContainer, styles.cardContainer]}
      onPress={onpressCard}>
      <Image source={imageSource} style={[styles.cardImage, ImagesProps]} />
      <View style={styles.overlay}>
        <View style={[styles.button, TitleInImage]}>
          <Text style={[styles.buttonText, TextStyles]}>{title}</Text>
        </View>
      </View>
      <View style={styles.overlay}>
        <View style={[styles.BottomButton, BottomBtn]}>
          <SvgFromXml xml={Icons.ReviewUserIcon} />
          <Text
            style={[
              styles.buttonText,
              {color: theme.colors.White, marginLeft: 3},
              TextStyles,
            ]}>
            1129
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.svgContainer}>
        <SvgFromXml xml={Icons.likeHeartCards} style={styles.svgImage} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 160,
    height: 235,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 12,
  

  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: theme.colors.White,
    padding: 5,
    marginBottom: 40,
    borderRadius: 17,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomButton: {
    backgroundColor: theme.colors.Black,
    color: theme.colors.White,
    padding: 5,
    marginBottom: 0,
    borderRadius: 17,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: theme.colors.Black,
    fontFamily: theme.fonts.PlusJakartaSansBold,
    textAlign: 'center',
  },
  svgContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  svgImage: {
    width: 20,
    height: 20,
  },
});

export default CustomCard;
