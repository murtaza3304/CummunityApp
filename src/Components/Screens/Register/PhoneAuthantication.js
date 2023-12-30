import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import BackArrowBtn from '../../CustomComponent/BackArrowBtn';
import theme from '../../../Assets/Themes/theme';
import Button from '../../CustomComponent/Button';
import OTPTextView from 'react-native-otp-textinput';
import { useNavigation } from '@react-navigation/native';

const PhoneAuthantication = () => {
  const navigation= useNavigation()
  const handleLogin = () => {
    navigation.navigate('EmailAuthantication')
    setOtpError('');
  };

  const BackButton = () => {
    navigation.navigate('Register')
  }

  let otpInput = useRef(null);
  const [correctOtp, SetCorrectOpt] = useState('');
  const [otpError, setOtpError] = useState('');

  const verifyOTP = () => {};



  return (
    <View style={styles.Container}>
      <View>
        <BackArrowBtn onPressBtn={BackButton}/>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.Heading}>Verify Phone Number</Text>
        <Text style={styles.Paragraph}>
          Please enter the 4-digit code sent to
        </Text>
        <Text style={styles.Paragraph}>039476397874 through SMS</Text>
      </View>

      <View>
        {/* OPT Start */}
        <View style={styles.OTPInput}>
          {otpError && (
            <Text
              style={[styles.Paragraph, {marginVertical: 10, color: 'red'}]}>
              {otpError}
            </Text>
          )}
          <View style={{width: '90%'}}>
            <OTPTextView
              textInputStyle={{
                color: otpError ? theme.colors.Red : theme.colors.Black,
              }}
              ref={otpInput}
              tintColor={otpError ? theme.colors.Red : theme.colors.Black}
              offTintColor={otpError ? theme.colors.Red : theme.colors.Black}
            />
          </View>
        </View>
        {/* OPT End */}

        <View style={styles.BottomBtn}>
          <Text style={{color: theme.colors.ParagraphColor}}>
            Didn't Recieve a Code?
          </Text>
          <TouchableOpacity
            style={{backgroundColor: 'white'}}
            onPress={() => handleLogin()}>
            <Text style={styles.ResendSMS}>Resend SMS</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: theme.fonts.PoppinsSemiBold,
              marginVertical: 4,
              color: theme.colors.Black,
            }}>
            Wronge Number
          </Text>
        </View>
      </View>
      {/* CustomBtn */}
      <View style={{marginTop: 20}}>
        <Button title="Verify Number" TextStyle={{fontFamily: theme.fonts.PoppinsSemiBold}} onPress={() => handleLogin()} />
      </View>
      <View style={styles.MainView}>
        <View>
          <Text style={styles.TextStyle}>
            By Continuing you're indicating that you accept{' '}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 2}}>
          <Text style={styles.TextStyle}>Our</Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.TextStyle,
                {textDecorationLine: 'underline', marginHorizontal: 2},
              ]}>
              Terms of Use
            </Text>
          </TouchableOpacity>
          <Text style={styles.TextStyle}>and our</Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.TextStyle,
                {textDecorationLine: 'underline', marginLeft: 2},
              ]}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PhoneAuthantication;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  TextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  Heading: {
    fontSize: 22,
    color: theme.colors.Black,
    fontFamily: theme.fonts.PoppinsBold,
  },
  Paragraph: {
    color: theme.colors.ParagraphColor,
    marginTop: 6,
    fontSize: 14,
    fontFamily: theme.fonts.PoppinsRegular,
  },
  BottomBtn: {
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ResendSMS: {
    color: theme.colors.ButtonBackground,
    marginLeft: 4,
    fontFamily: theme.fonts.PoppinsRegular,
    fontSize: 14,
  },
  OTPInput: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  TextStyle: {
    color: theme.colors.Black,
  },
});
