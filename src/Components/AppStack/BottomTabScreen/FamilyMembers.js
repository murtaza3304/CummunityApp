import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import theme from '../../../Assets/Themes/theme'

const FamilyMembers = () => {
  return (
    <View style={styles.MainContainer}>
    <View style={styles.HeadingContainer}>
        <Text style={styles.Heading}>Family Details</Text>
    </View>
    <View style={styles.Container}>
    <Image source={require('../../../Assets/images/FamilyDetail.png')} style={{width: 200, height: 125}}/>
      
    </View>
    </View>
  )
}

export default FamilyMembers

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent:'center',
    },
    MainContainer:{
        paddingHorizontal: 20,
    },
    HeadingContainer: {
        alignItems:'center',
        justifyContent: 'center',
        width: '100%',
        height: 60
    },
    Heading: {
        color: theme.colors.Black,
        fontFamily: theme.fonts.PlusJakartaSansSamiBold,
        fontSize: 26
    }
})