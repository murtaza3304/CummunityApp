import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SvgFromXml } from 'react-native-svg'
import theme from '../../../Assets/Themes/theme'
import Icons from '../../../Assets/Icons'
import InputField from '../../CustomComponent/InputField'
import Button from '../../CustomComponent/Button'

const AddToBusiness = () => {
  return (
    <View style={styles.MainContainer}>
    <ScrollView>
    <View style={styles.UserProfile}>
        <TouchableOpacity style={styles.TouchableOpacity}>
          <Image source={require('../../../Assets/images/Vector.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.EditIcon}>
          <SvgFromXml xml={Icons.EditIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.InputFields}>
      <InputField label='Business Name' placeholder='Business Name' placeholderTextColor={{color: 'grey'}}/>
      <InputField label='Cell Number' placeholder='Enter Number' keyboardType='numeric' placeholderTextColor={{color: 'grey'}}/>
      <InputField label='Address' placeholder='Enter Address' placeholderTextColor={{color: 'grey'}}/>
      </View>
      <View style={{marginTop: 20}}>
        <Button title='Add'/>
      </View>
      </ScrollView>
      </View>
      )
}
export default AddToBusiness

const styles = StyleSheet.create({
    MainContainer: {
        paddingHorizontal: 20
    },
    UserProfile: {
        width: '100%',
        height: 135,
        marginTop: 19,
        alignItems: 'center',
        justifyContent: 'center',
      },
      TouchableOpacity: {
        borderRadius: 100,
        backgroundColor: theme.colors.ProfileBg,
        width: 115,
        height: 115,
        alignItems: 'center',
        justifyContent: 'center',
      },
      EditIcon: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        width: 25,
        height: 25,
        borderColor: theme.colors.White,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: theme.colors.ProfileBg,
      },
      InputFields: {
        marginTop: 15
      }
})