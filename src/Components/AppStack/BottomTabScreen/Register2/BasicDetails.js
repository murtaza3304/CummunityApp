import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgFromXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

import BackArrowBtn from '../../../CustomComponent/BackArrowBtn';
import Button from '../../../CustomComponent/Button';
import Icons from '../../../../Assets/Icons';
import InputField from '../../../CustomComponent/InputField';
import theme from '../../../../Assets/Themes/theme';

const BasicDetails = () => {
  const navigation = useNavigation();

  const BackBtn = () => {
    navigation.navigate('UserScreen3');
  };

  const Next = () => {
    navigation.navigate('WhatLocation');
  };

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSurnameFocused, setIsSurnameFocused] = useState(false);
  const [isDoBFocused, setIsDoBFocused] = useState(false);
  const [isMaritalFocused, setIsMaritalFocused] = useState(false);
  const [firstNameBorder, setFirstNameBorder] = useState(
    theme.colors.BackgroundUnselected,
  );
  const [lastNameBorder, setLastNameBorder] = useState(
    theme.colors.BackgroundUnselected,
  );

  const handleFocus = field => {
    if (field === 'firstName') {
      setFirstNameBorder(theme.colors.BtnBgLight);
      setLastNameBorder(theme.colors.BorderInactiveColor);
    } else if (field === 'lastName') {
      setLastNameBorder(theme.colors.BtnBgLight);
      setFirstNameBorder(theme.colors.BackgroundUnselected);
    }
  };

  const handleBlur = () => {
    setFirstNameBorder(theme.colors.BackgroundUnselected);
    setLastNameBorder(theme.colors.BackgroundUnselected);
  };

  const [Gender, SelectGender] = useState({male: true, female: false});

  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <BackArrowBtn onPressBtn={BackBtn} />
        </View>
        <View style={styles.HeadingContainer}>
          <Text style={styles.Heading}>Basic Details</Text>
          <Text style={styles.Paragraph}>
            Your Name, Sirname and Basic Details
          </Text>
        </View>
        <View style={styles.IndicatorContainer}>
          <View
            style={[
              styles.circle,
              {backgroundColor: theme.colors.BtnBgLight},
            ]}></View>
          <View style={styles.line}></View>
          <View style={styles.circle}></View>
          <View style={styles.line}></View>
          <View style={styles.circle}></View>
        </View>
        <View style={styles.MainContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              placeholder="First Name"
              style={{...styles.input, borderColor: firstNameBorder}}
              onFocus={() => handleFocus('firstName')}
              onBlur={handleBlur}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              placeholder="Last Name"
              style={{...styles.input, borderColor: lastNameBorder}}
              onFocus={() => handleFocus('lastName')}
              onBlur={handleBlur}
            />
          </View>
        </View>
        <View>
          <InputField
            label="Your Cast"
            placeholder="Select Sub Cast"
            xml={<SvgFromXml xml={Icons.DropDown} />}
            InputStyle={[
              styles.InputStyle,
              {
                borderColor: isEmailFocused
                  ? theme.colors.BtnBgLight
                  : theme.colors.BorderInactiveColor,
              },
            ]}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />

          <InputField
            label="Surname"
            placeholder="Type here"
            InputStyle={[
              styles.InputStyle,
              {
                borderColor: isSurnameFocused
                  ? theme.colors.BtnBgLight
                  : theme.colors.BorderInactiveColor,
              },
            ]}
            onFocus={() => setIsSurnameFocused(true)}
            onBlur={() => setIsSurnameFocused(false)}
          />
        </View>
        <View>
          <Text style={{color: theme.colors.Grey, marginVertical: 10}}>
            Gender
          </Text>
          <View style={styles.GenderStyle}>
            <Text style={styles.Paragraph}> Male </Text>
            <TouchableOpacity
              style={[
                styles.GenderSelectBox,
                Gender.male
                  ? {backgroundColor: theme.colors.BtnBgLight}
                  : {backgroundColor: theme.colors.BorderInactiveColor},
              ]}
              onPress={() =>
                SelectGender({male: true, female: false})
              }></TouchableOpacity>

            <Text style={styles.Paragraph}>Female</Text>
            <TouchableOpacity
              style={[
                styles.GenderSelectBox,
                Gender.female
                  ? {backgroundColor: theme.colors.BtnBgLight}
                  : {backgroundColor: theme.colors.BorderInactiveColor},
              ]}
              onPress={() =>
                SelectGender({male: false, female: true})
              }></TouchableOpacity>
          </View>
          <View>
            <InputField
              label="Date of Birth"
              placeholder="Select"
              keyboardType="numeric"
              xml={
                <TouchableOpacity>
                  <SvgFromXml xml={Icons.CalenderIcon} />
                </TouchableOpacity>
              }
              InputStyle={[
                styles.InputStyle,
                {
                  borderColor: isDoBFocused
                    ? theme.colors.BtnBgLight
                    : theme.colors.BorderInactiveColor,
                },
              ]}
              onFocus={() => setIsDoBFocused(true)}
              onBlur={() => setIsDoBFocused(false)}
            />
            <InputField
              label="Marital Status"
              placeholder="Select"
              xml={
                <TouchableOpacity>
                  <SvgFromXml xml={Icons.DropDown} />
                </TouchableOpacity>
              }
              InputStyle={[
                styles.InputStyle,
                {
                  borderColor: isMaritalFocused
                    ? theme.colors.BtnBgLight
                    : theme.colors.BorderInactiveColor,
                },
              ]}
              onFocus={() => setIsMaritalFocused(true)}
              onBlur={() => setIsMaritalFocused(false)}
            />
          </View>
          <View style={{marginTop: 12}}>
            <Button title="Next" onPress={() => Next()} />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.Paragraph}>Already have an account?</Text>
          <TouchableOpacity style={{marginLeft: 5}} onPress={() => Login()}>
            <Text style={[styles.Paragraph, {color: theme.colors.BtnBgLight}]}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BasicDetails;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
    width: '100%',
    paddingBottom: 20,
  },
  Paragraph: {
    color: theme.colors.ParagraphColor,
    fontSize: 12,
  },
  HeadingContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Heading: {
    fontSize: 22,
    fontFamily: theme.fonts.PoppinsSemiBold,
    color: theme.colors.Black,
    alignItems: 'center',
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
    borderColor: theme.colors.BorderInactiveColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  line: {
    width: '30%',
    borderWidth: 1,
    borderColor: theme.colors.BorderInactiveColor,
  },
  inputContainer: {
    width: '47%',
  },
  label: {
    marginBottom: 5,
    color: theme.colors.ParagraphColor,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  GenderStyle: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },
  GenderSelectBox: {
    width: 15,
    height: 15,
    borderColor: theme.colors.BorderInactiveColor,
    borderWidth: 1,
    borderRadius: 50,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
});
