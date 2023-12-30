import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import BackArrowBtn from '../../../CustomComponent/BackArrowBtn'
import theme from '../../../../Assets/Themes/theme'
import { SvgFromXml } from 'react-native-svg'
import Icons from '../../../../Assets/Icons'
import InputField from '../../../CustomComponent/InputField'
import Button from '../../../CustomComponent/Button'
import { useNavigation } from '@react-navigation/native'


const EnterLocation = () => {
  const navigation = useNavigation()
  const backBtn = () => {
 navigation.navigate('WhatLocation')
  }
  const Next = () => {
    navigation.navigate('CompleteProfile')
  }

  return (
    <View style={styles.Container}>
    <ScrollView showsVerticalScrollIndicator={false}>    
    <View>
        <BackArrowBtn onPressBtn={backBtn}/>
    </View>
    <View style={styles.Heading}>
        <Text style={styles.Heading}>Enter Your Location</Text>
    </View>
    <View style={styles.IndicatorContainer}>
    <View style={[styles.circle, {backgroundColor: theme.colors.BtnBgLight}]}></View>
    <View style={[styles.line, {borderColor: theme.colors.BtnBgLight}]}></View>
    <View style={[styles.circle, {backgroundColor: theme.colors.BtnBgLight}]}></View>
    <View style={styles.line}></View>
    <View style={styles.circle}></View>
    </View>
    <View style={{marginTop: 15}}>
          <TouchableOpacity style={styles.SearchIcon}>
            <SvgFromXml xml={Icons.SearchIcon} style={{marginLeft: 15}} />
            <TextInput
              placeholder="Find people, Business, etc"
              style={styles.PlaceHolder}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.MyLocation}>
          <TouchableOpacity style={{marginTop: 6}}>
            <SvgFromXml xml={Icons.MyLocationIcon} />
          </TouchableOpacity>
          <Text style={[styles.Heading, {fontSize: 17, marginLeft: 7}]}>Use My Location</Text>
        </View>
        <View style={{width: '100%', borderWidth: 1, borderColor: theme.colors.BorderInactiveColor, marginTop: 15}}></View>
        <View style={{marginTop: 15}}>
          <TouchableOpacity style={styles.LocationStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <SvgFromXml xml={Icons.MyLocationIcon2} style={{marginLeft: 15}} />
            <Text style={{color: theme.colors.ParagraphColor, marginLeft: 7}}>Rajkot India</Text>
            </View>

            <Text style={{color: theme.colors.Grey, marginLeft: 12}}>1254 platina 304</Text>
          </TouchableOpacity>
        </View>
        <View>
          <InputField label='Native Village' placeholder='Type here'/>
          <InputField label='Current City / Village' placeholder='Type here'/>
        </View>
        <View style={{marginTop: 50}}>
          <Button title='Next' onPress={Next}/>
        </View>
        </ScrollView>

    </View>
  )
}

export default EnterLocation

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: 20,
    },
    Paragraph: {
        color: theme.colors.ParagraphColor,
        fontSize: 12,
      },
    
      Heading: {
        fontSize: 22,
        fontFamily: theme.fonts.PoppinsSemiBold,
        color: theme.colors.Black,
        alignItems: 'center'
      },
      IndicatorContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      circle: { 
        width: 15,
        height: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: theme.colors.BorderInactiveColor
      },
      line: {
        width: '30%',
        borderWidth: 1,
        borderColor: theme.colors.BorderInactiveColor
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
      LocationStyle: {
        backgroundColor: 'red',
        borderRadius: 30,
        justifyContent: 'flex-start',
        backgroundColor: theme.colors.LocationBg,
        paddingVertical: 5,
        marginTop: 8,
      },
      PlaceHolder: {
        marginLeft: 7,
      },
      MyLocation: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        marginTop: 10,
      }
     
})