import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import theme from '../../../Assets/Themes/theme';
import InputField from '../../CustomComponent/InputField';
import Button from '../../CustomComponent/Button';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const Register = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);


  const [isFullNameFocused, setIsFullNameFocused] = useState(false);
 
    const GetStart = () => {
      navigation.navigate('PhoneAuthantication');
    };
  return (
    <View style={styles.Container} behavior="padding" enabled>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.InnerContainer}>
          <Text style={styles.Heading}>Login/Signup</Text>
          <Text style={styles.Paragraph}>
            Sign Up now to get started with an Account.
          </Text>
          <View style={styles.Line1}>   
            <Text style={[styles.Heading, {fontSize: 18}]}>
              Welcome To Bhandhari Family
            </Text>
          </View>
        </View>
        <View style={styles.InputFields}>
          <InputField
          keyboardType='numeric'
            label="Mobile Number"
            placeholder='enter mobile number'
            placeholderTextColor="grey"
            InputStyle={[
              styles.InputStyle,
              {borderColor: isFullNameFocused ? '#1676F3' : '#ccc'},
            ]}
            onFocus={() => setIsFullNameFocused(true)}
            onBlur={() => setIsFullNameFocused(false)}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            title="Get Started"
            TextStyle={{color: theme.colors.White, paddingVertical: 5}}
            onPress={() => GetStart()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
  },
  InnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  Heading: {
    fontSize: 22,
    color: theme.colors.Black,
    fontFamily: theme.fonts.PlusJakartaSans,
  },
  Paragraph: {
    color: theme.colors.ParagraphColor,
    marginTop: 10,
    fontSize: 14,
  },
  BtnOpacity: {
    backgroundColor: theme.colors.ButtonBackground,
    paddingVertical: 0,
    paddingHorizontal: 25,
    borderRadius: 16,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: theme.colors.White,
    fontSize: 12,
  },
  Line1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  XmlIcon: {
    width: '40%',
  },
  InputFields: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40
  },
  InputStyle: {
    borderColor: theme.colors.borderColor,
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    marginTop: 35,
  },
 
  TermsBtn: {
    color: theme.colors.ButtonBackground,
    marginLeft: 4,
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  CheckBox: {
    width: 17,
    height: 17,
    backgroundColor: theme.colors.BackgroundUnselected,
    marginRight: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomBtn: {
    marginTop: 10,
    marginBottom: 25,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 12,
  },
  LogIn: {
    color: theme.colors.ButtonBackground,
    marginLeft: 4,
  },
  PlaceColor: {
    
  }
});
