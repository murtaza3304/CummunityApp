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
import SelectDropdown from 'react-native-select-dropdown';
import BackArrowBtn from '../../../CustomComponent/BackArrowBtn';
import Button from '../../../CustomComponent/Button';
import Icons from '../../../../Assets/Icons';
import InputField from '../../../CustomComponent/InputField';
import theme from '../../../../Assets/Themes/theme';

import DateTimePickerModal from "react-native-modal-datetime-picker";

const BasicDetails = () => {
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  }

  const BackBtn = () => {
    navigation.navigate('UserScreen3');
  };

  const Next = () => {
    navigation.navigate('EnterLocation');
  };
  const [InitialName, SetInitialName] = useState(false);
  const [isDoBFocused, setIsDoBFocused] = useState(false);
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
  const ToggleBackBtn = () => {
    navigation.navigate('Register')
  }
  const [Gender, SelectGender] = useState({male: true, female: false});
  const SubCast = ['Gujjar', 'Rana', 'Araye', 'Butt'];
  const GenderSelection = ['Male', 'Female', 'Other']
  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <BackArrowBtn onPressBtn={()=>ToggleBackBtn()}/>
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
        
        <InputField
            label="First Name"
            placeholder="Type here"
            placeholderTextColor="grey"
            InputStyle={[
              styles.InputStyle,
              {
                borderColor: InitialName
                  ? theme.colors.BtnBgLight
                  : theme.colors.BorderInactiveColor,
              },
            ]}
            onFocus={() => SetInitialName(true)}
            onBlur={() => SetInitialName(false)}
          />
        <View style={styles.MainContainer}>
        
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Middle Name</Text>
            <TextInput
              placeholder="Middle Name"
              placeholderTextColor="grey"
              style={{...styles.input, borderColor: firstNameBorder}}
              onFocus={() => handleFocus('firstName')}
              onBlur={handleBlur}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="grey"
              style={{...styles.input, borderColor: lastNameBorder}}
              onFocus={() => handleFocus('lastName')}
              onBlur={handleBlur}
            />
          </View>
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
              placeholderTextColor="grey"
              keyboardType="numeric"
              xml={
                <TouchableOpacity onPress={showDatePicker}>
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
                  <View>
        <Text style={[styles.label, {marginTop: 10}]}>Select Country</Text>
        <SelectDropdown
          defaultButtonText="Marital Status"
          dropdownIconPosition='right'
          data={GenderSelection}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          buttonStyle={styles.BtnStyle}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          
          searchInputTxtStyle={styles.textinputtextstyles}
          renderDropdownIcon={(isOpened) => {
            return (
              <SvgFromXml
                xml={Icons.DropDown}
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={18}
              />
            );
          }}
          dropdownStyle={styles.DropDown}
        />
      </View>
          </View>
          <View style={{marginTop: 12}}>
            <Button title="Next" onPress={() => Next()} />
          </View>
        </View>
        <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
    color: theme.colors.ParagraphColor,
    fontSize: 12
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
  dropdown1BtnTxtStyle: {
    color: theme.colors.Grey,
    fontSize: 15,
    fontFamily: theme.fonts.PlusJakartaSans,
    height: 20,
    flexDirection: 'row',
    textAlign: 'left',
  
  },
BtnStyle: {
  width: '100%',
  borderRadius: 10,
  marginTop: 3,
  borderWidth: 1,
  borderColor: theme.colors.BorderInactiveColor,
},
DropDown: {
  borderRadius: 12, 
}

});
