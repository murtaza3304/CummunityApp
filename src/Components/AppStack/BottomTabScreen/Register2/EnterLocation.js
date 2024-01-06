import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import BackArrowBtn from '../../../CustomComponent/BackArrowBtn';
import theme from '../../../../Assets/Themes/theme';
import InputField from '../../../CustomComponent/InputField';
import Button from '../../../CustomComponent/Button';
import {useNavigation} from '@react-navigation/native';

const EnterLocation = () => {
  const navigation = useNavigation();
  const backBtn = () => {
    navigation.navigate('BasicDetails');
  };
  const toggleNextScreen = () => {
    navigation.navigate('CompleteProfile');
  };

  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <BackArrowBtn onPressBtn={backBtn} />
        </View>
        <View style={styles.Heading}>
          <Text style={styles.Heading}>Enter Your Location</Text>
        </View>
        <View style={styles.IndicatorContainer}>
          <View
            style={[
              styles.circle,
              {backgroundColor: theme.colors.BtnBgLight},
            ]}></View>
          <View
            style={[
              styles.line,
              {borderColor: theme.colors.BtnBgLight},
            ]}></View>
          <View
            style={[
              styles.circle,
              {backgroundColor: theme.colors.BtnBgLight},
            ]}></View>
          <View style={styles.line}></View>
          <View style={styles.circle}></View>
        </View>
        {/* Remain */}
        <View style={{width: '100%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
          <Text style={[styles.Heading, {fontSize: 16,borderColor: theme.colors.Black, borderBottomWidth: 2}]}>Current Address</Text>
        </View>
        <View >
          <InputField
            label="Address"
            placeholder="Type here"
            placeholderTextColor="grey"
          />
          <InputField
            label="Country"
            placeholder="Type here"
            placeholderTextColor="grey"
          />
          <InputField
            label=" City "
            placeholder="Type here"
            placeholderTextColor="grey"
          />
          <InputField
            label="State"
            placeholder="Type here"
            placeholderTextColor="grey"
          />
          <InputField
            label="Village"
            placeholder="Type here"
            placeholderTextColor="grey"
          />
          <InputField
            label="pincode"
            placeholder="Type here"
            placeholderTextColor="grey"
            keyboardType='numeric'
          />
        </View>
        
         <View style={{width: '100%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
          <Text style={[styles.Heading, {fontSize: 16, borderColor: theme.colors.Black, borderBottomWidth: 2}]}>Native Address</Text>
        </View>
        <View >
          <InputField
            label="Address"
            placeholder="Type here"
            placeholderTextColor="grey"
          />
          <InputField
            label="Country"
            placeholder="Type here"
            placeholderTextColor="grey"
          />
          <InputField
            label=" City "
            placeholder="Type here"
            placeholderTextColor="grey"
          />
          <InputField
            label="State"
            placeholder="Type here"
            placeholderTextColor="grey"
          />
          <InputField
            label="Village"
            placeholder="Type here"
            placeholderTextColor="grey"
          />
          <InputField
            label="pincode"
            placeholder="Type here"
            placeholderTextColor="grey"
            keyboardType='numeric'
          />
        </View>
        <View style={{marginVertical: 18}}>
        <Button title='Next' TextStyle={{fontFamily: theme.fonts.PlusJakartaSansSamiBold}} onPress={()=>toggleNextScreen()}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default EnterLocation;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
  },
  Paragraph: {
    color: theme.colors.ParagraphColor,
    fontSize: 12,
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
  },
  line: {
    width: '30%',
    borderWidth: 1,
    borderColor: theme.colors.BorderInactiveColor,
  },
  SearchIcon: {
    backgroundColor: 'red',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.LightBlue,
    paddingVertical: 3,
    marginTop: 8,
  },
  LocationStyle: {
    borderRadius: 30,
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.LocationBg,
    paddingVertical: 5,
    marginTop: 8,
  },
  PlaceHolder: {
    marginLeft: 7,
  },
  MyLocation: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginTop: 10,
  },
});
