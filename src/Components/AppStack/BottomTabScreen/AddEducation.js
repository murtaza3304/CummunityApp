import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SvgFromXml } from 'react-native-svg'
import theme from '../../../Assets/Themes/theme'
import Icons from '../../../Assets/Icons'
import InputField from '../../CustomComponent/InputField'
import Button from '../../CustomComponent/Button'

const AddEducation = () => {
  return (
    <View style={styles.MainContainer}>
    <ScrollView>
    <View style={styles.HeadingContainer}>
        <Text style={styles.Heading}>Add Education Details</Text>
    </View>
  
      <View style={styles.InputFields}>
      <InputField label='FullName ' placeholder='Enter Your Name' placeholderTextColor={{color: 'grey'}}/>
      <InputField label='Matriculation' placeholder='School Name' placeholderTextColor={{color: 'grey'}}/>
      <InputField label='Intermediate' placeholder='College Name' placeholderTextColor={{color: 'grey'}}/>
      <InputField label='University' placeholder='University Name' placeholderTextColor={{color: 'grey'}}/>
      <InputField label='Skill' placeholder='Enter Skill' placeholderTextColor={{color: 'grey'}}/>
      </View>
      <View style={{marginTop: 20}}>
        <Button title='Add'/>
      </View>
      </ScrollView>
      </View>
      )
}
export default AddEducation

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
      },
      HeadingContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
      },
      Heading: {
        fontFamily: theme.fonts.PoppinsSemiBold,
       color: theme.colors.Black,
       fontSize: 22
      }
})