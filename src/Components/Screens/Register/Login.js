import {StyleSheet, Text, TouchableOpacity, View,  KeyboardAvoidingView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import theme from '../../../Assets/Themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../Assets/Icons';
import InputField from '../../CustomComponent/InputField';
import Button from '../../CustomComponent/Button';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()
 const onLogin = () => {
  navigation.navigate('AppStack')
 }
 const signUp = () => {
  navigation.navigate('Register')
 }

  const [isChecked, setIsChecked] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  // toggleEyeButton
  const [toggleEyeButtonVisible, setToggleEyeButtonVisible] = useState(true)
  const toggleEyeButton = () => {
    setToggleEyeButtonVisible(!toggleEyeButtonVisible)
  }
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.EmptySpace}></View>
     
        <View style={styles.TextStyle}>
        
          <Text style={styles.Heading}>Log in to Your Account</Text>
          <Text style={styles.Paragraph}>
            Welcome back, Please enter your details.
          </Text>
        </View>
        <TouchableOpacity style={styles.GoogleContainer}>
          <SvgFromXml xml={Icons.GoogleIcon} style={styles.XmlGoogleIcon}/>
          <Text style={[styles.Paragraph, {marginHorizontal: 6}]}>Continue with Google</Text>
        </TouchableOpacity>
        <View style={styles.Line1}>
          <SvgFromXml xml={Icons.Line1} style={styles.XmlIcon} />
          <Text style={{marginHorizontal: 15}}>OR</Text>
          <SvgFromXml xml={Icons.Line1} style={styles.XmlIcon} />
        </View>
        <KeyboardAvoidingView>
        <View style={styles.InputFields}>
          <InputField
            label="Email or Phone"
            InputStyle={[
              styles.InputStyle,
              {borderColor: isEmailFocused ? '#1676F3' : '#ccc'},
            ]}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
        </View>
        <View style={styles.InputFields}>
          <InputField
          secureTextEntry={toggleEyeButtonVisible}
            label="Password"
            xml={
            <TouchableOpacity onPress={toggleEyeButton}>
            <SvgFromXml xml={toggleEyeButtonVisible ? Icons.HideEyeIcon:Icons.EyeForHide}/>
            </TouchableOpacity>}
            InputStyle={[
              styles.InputStyle,
              {borderColor: isPasswordFocused ? '#1676F3' : '#ccc'},
            ]}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
        </View>
        </KeyboardAvoidingView>
        <View style={styles.CheckBoxContainer}>
          <View>
            <TouchableOpacity
              style={[
                styles.CheckBox,
               
              ]}
              onPress={toggleCheckBox}
            >{isChecked ? <SvgFromXml xml={Icons.InboxTickIcon} /> : null}</TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '88%',
            }}>
            <View>
              <Text style={styles.Paragraph}>Remember Me</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.TermsBtn}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      
      <View style={{marginTop: 10}}>
        <Button title="Log in" TextStyle={styles.btnText} onPress={()=>onLogin()}/>
      </View>
      <View style={styles.BottomBtn}>
        <Text style={{color: theme.colors.ParagraphColor}}>
          Don't have an account
        </Text>
        <TouchableOpacity onPress={signUp}>
          <Text style={styles.LogIn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  EmptySpace: {
    height: 180,
    backgroundColor: theme.colors.White,
    width: '100%',
  },
  XmlGoogleIcon: {
   marginBottom: 5
  },
  TextStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Heading: {
    fontSize: 22,
    color: theme.colors.Black,
    fontFamily: theme.fonts.PlusJakartaSansSamiBold,
  },
  Paragraph: {
    color: theme.colors.ParagraphColor,
    fontFamily: theme.fonts.PoppinsRegular,
    fontSize: 14,
  },
  GoogleContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 16,
    borderColor: theme.colors.Grey,
    borderWidth: 1,
  },
  Line1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  XmlIcon: {
    width: '60%',
  },
  InputFields: {
    width: '100%',
    alignItems: 'center',
  },
  InputStyle: {
    borderColor: theme.colors.borderColor,
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  CheckBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 17,
    height: 17,
    backgroundColor: theme.colors.BackgroundUnselected,
    marginRight: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  TermsBtn: {
    color: theme.colors.Black,
    marginLeft: 2,
    fontFamily: theme.fonts.PoppinsSemiBold,
    fontSize: 12,
  },
  btnText: {
    fontFamily: theme.fonts.PoppinsSemiBold,
  },
  BottomBtn: {
    marginTop: 10,
    marginBottom: 25,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  LogIn: {
    color: theme.colors.ButtonBackground,
    marginLeft: 4,

  },
});
