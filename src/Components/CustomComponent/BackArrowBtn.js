import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgFromXml } from 'react-native-svg'
import Icons from '../../Assets/Icons'
import theme from '../../Assets/Themes/theme'

const BackArrowBtn = ({onPressBtn}) => {
  return (
    <View style={styles.BackArrow}>
      <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>onPressBtn()}>
        <SvgFromXml xml={Icons.BackArrow} />
      </TouchableOpacity>
    </View>
  )
}
export default BackArrowBtn

const styles = StyleSheet.create({
    BackArrow: {
        width: '100%',
        height: 30,
         marginTop: 25,
       
    },
    TouchableOpacity: {
      width: 35,
      height: 30,
      alignItems:'center',
      justifyContent: 'center',
      borderRadius: 6,
    }
})