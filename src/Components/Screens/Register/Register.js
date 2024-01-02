import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../../../Assets/Themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../Assets/Icons';
import InputField from '../../CustomComponent/InputField';
import Button from '../../CustomComponent/Button';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();



  const [isChecked, setIsChecked] = useState(false);
  const [activeButton, setActiveButton] = useState(1);
  const [isFullNameFocused, setIsFullNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);
    const GetStart = () => {
      navigation.navigate('PhoneAuthantication');
   setTimeout(()=>{setActiveButton(1)},1000) 

    };
  const handleButtonPress = buttonIndex => {
    setActiveButton(buttonIndex);
    navigation.navigate('Login');
    setTimeout(()=>{
      setActiveButton(1)
    },2000)

  };

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  // Password Icon Functions
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, isSetConfirmPasswordVisible] =
    useState(true);

  const ToggleHidePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const ToggleHidePasswordConfirm = () => {
    isSetConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <View style={styles.Container} behavior="padding" enabled>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.InnerContainer}>
          <Text style={styles.Heading}>Create An Account</Text>
          <Text style={styles.Paragraph}>
            Sign Up now to get started with an Account.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: theme.colors.BackgroundUnselected,
              height: 46,
              padding: 2,
              marginTop: 10,
              borderRadius: 16,
            }}>
            <TouchableOpacity
              style={[
                styles.BtnOpacity,
                activeButton === 1
                  ? {backgroundColor: theme.colors.BtnBgLight}
                  : {backgroundColor: '#D9D9D9'},
              ]}
              onPress={() => handleButtonRegister(1)}>
              <Text
                style={[
                  styles.btnText,
                  activeButton === 1
                    ? {color: theme.colors.White}
                    : {color: theme.colors.Black},
                ]}>
                Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.BtnOpacity,
                activeButton === 2
                  ? {backgroundColor: theme.colors.BtnBgLight}
                  : {backgroundColor: '#D9D9D9'},
              ]}
              onPress={() => handleButtonPress(2)}>
              <Text
                style={[
                  styles.btnText,
                  activeButton === 2
                    ? {color: theme.colors.White}
                    : {color: theme.colors.Black},
                ]}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Line1}>
            <SvgFromXml xml={Icons.Line1} style={styles.XmlIcon} />
            <Text style={{marginHorizontal: 10, color: theme.colors.Grey}}>
              OR
            </Text>
            <SvgFromXml xml={Icons.Line1} style={styles.XmlIcon} />
          </View>
        </View>
        <View style={styles.InputFields}>
          <InputField
            label="Full Name"
            InputStyle={[
              styles.InputStyle,
              {borderColor: isFullNameFocused ? '#1676F3' : '#ccc'},
            ]}
            onFocus={() => setIsFullNameFocused(true)}
            onBlur={() => setIsFullNameFocused(false)}
          />
        </View>
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
            secureTextEntry={isPasswordVisible}
            label="Password"
            xml={
              <TouchableOpacity onPress={ToggleHidePassword}>
                <SvgFromXml
                  xml={isPasswordVisible ? Icons.HideEyeIcon : Icons.EyeForHide}
                />
              </TouchableOpacity>
            }
            InputStyle={[
              styles.InputStyle,
              {borderColor: isPasswordFocused ? '#1676F3' : '#ccc'},
            ]}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
        </View>
        <View style={styles.InputFields}>
          <InputField
            secureTextEntry={isConfirmPasswordVisible}
            label="Confirm Password"
            xml={
              <TouchableOpacity onPress={ToggleHidePasswordConfirm}>
                <SvgFromXml
                  xml={
                    isConfirmPasswordVisible
                      ? Icons.HideEyeIcon
                      : Icons.EyeForHide
                  }
                />
              </TouchableOpacity>
            }
            InputStyle={[
              styles.InputStyle,
              {borderColor: isConfirmPasswordFocused ? '#1676F3' : '#ccc'},
            ]}
            onFocus={() => setIsConfirmPasswordFocused(true)}
            onBlur={() => setIsConfirmPasswordFocused(false)}
          />
        </View>
        <View style={styles.CheckBoxContainer}>
          <View>
            <TouchableOpacity style={styles.CheckBox} onPress={toggleCheckBox}>
              {isChecked ? <SvgFromXml xml={Icons.InboxTickIcon} /> : null}
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.Paragraph}>I have Read and Agreed to the</Text>
            <TouchableOpacity>
              <Text style={styles.TermsBtn}>Terms of Services</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 12}}>
          <Button
            title="Get Started"
            TextStyle={{color: theme.colors.White, paddingVertical: 5}}
            onPress={() => GetStart()}
          />
        </View>
        <View style={styles.BottomBtn}>
          <Text style={{color: theme.colors.ParagraphColor}}>
            already have an account
          </Text>
          <TouchableOpacity onPress={() => handleButtonPress()}>
            <Text style={styles.LogIn}>Log in</Text>
          </TouchableOpacity>
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
    marginTop: 6,
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
  },
  InputStyle: {
    borderColor: theme.colors.borderColor,
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    marginTop: 35,
  },
  Paragraph: {
    color: theme.colors.ParagraphColor,
    fontSize: 12,
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
});
