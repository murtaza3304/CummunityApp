import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BackArrowBtn from '../../../CustomComponent/BackArrowBtn'
import { SvgFromXml } from 'react-native-svg'
import Icons from '../../../../Assets/Icons'
import theme from '../../../../Assets/Themes/theme'
import Button from '../../../CustomComponent/Button'
import { useNavigation } from '@react-navigation/native'

const WhatLocation = () => {
  const navigation = useNavigation();
  const BackBtn =() => {
    navigation.navigate('BasicDetails')
  }
  const AllowLocation = () => {
    navigation.navigate('EnterLocation')
  }

  return (
    <View style={styles.Container}>
      <BackArrowBtn  onPressBtn={()=> BackBtn()}/>
      <View style={styles.InnerContainer}>
      <TouchableOpacity>
        <SvgFromXml xml={Icons.MainLocation}/>
        </TouchableOpacity>
        <Text style={styles.Heading}>What is Your Location</Text>
        <Text style={styles.Paragraph}>We need to know your location in order to suguest your Service</Text>
        <View style={{width: '100%', marginTop: 30}}>
      <Button title='Allow Location Permission' onPress={AllowLocation}/>
      </View>
      
      <TouchableOpacity style={{marginTop: 15, alignItems: 'center', justifyContent:'center'}} onPress={BackBtn}>
        <Text style={[styles.Paragraph, {color: theme.colors.BtnBgLight, width:130}]}>Enter Location Manutally</Text>
      </TouchableOpacity>
      </View>
     
    </View>
  )
}

export default WhatLocation

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: 20,
    },
    InnerContainer: {
  width: '100%',
  height: '90%',
  alignItems: 'center',
  justifyContent: 'center'
    },
    Paragraph: {
        color: theme.colors.ParagraphColor,
        fontSize: 12,
        width: 270
      },
    
      Heading: {
        fontSize: 22,
        fontFamily: theme.fonts.PoppinsSemiBold,
        color: theme.colors.Black,
        alignItems: 'center',
        marginTop: 15
      },
})