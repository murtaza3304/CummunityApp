import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import BackArrowBtn from '../../../CustomComponent/BackArrowBtn';
import theme from '../../../../Assets/Themes/theme';
import {useNavigation} from '@react-navigation/native';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../../Assets/Icons';
import InputField from '../../../CustomComponent/InputField';
import Button from '../../../CustomComponent/Button';

const CompleteProfile = () => {
  const navigation = useNavigation();
  const BackBtn = () => {
    navigation.navigate('EnterLocation');
  };
  const Next = () => {
    navigation.navigate('RegistrationDetail');
  };

  return (
    <View style={styles.Container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <BackArrowBtn onPressBtn={BackBtn} />
      </View>
      <View style={styles.Heading}>
        <Text style={styles.Heading}>Complete Your Profile</Text>
        <Text style={styles.Paragraph}>
          Don't worry only you can see your personal Data
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
      <View style={styles.UserProfile}>
        <TouchableOpacity style={styles.TouchableOpacity}>
          <Image source={require('../../../../Assets/images/Vector.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.EditIcon}>
          <SvgFromXml xml={Icons.EditIcon} />
        </TouchableOpacity>
      </View>
      <View>
        <InputField
          label="Adhar Card"
          placeholder="Front Side"
          placeholderTextColor="grey"
          xml={
            <TouchableOpacity>
              <SvgFromXml xml={Icons.UploadProfilePic} />
            </TouchableOpacity>
          }
        />
        <InputField
          label="Adhar Card"
          placeholder="Back Side"
          placeholderTextColor="grey"
          xml={
            <TouchableOpacity>
              <SvgFromXml xml={Icons.UploadProfilePic} />
            </TouchableOpacity>
          }
        />
        <InputField
          placeholderTextColor="grey"
          keyboardType="numeric"
          label="Phone Number"
          placeholder="032764762764"
        />
      </View>
      <View style={{marginTop: 20, marginBottom: 30}}>
        <Button title="Next" onPress={Next} />
      </View>
      </ScrollView>
    </View>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
    marginBottom: 5
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
    backgroundColor: theme.colors.BtnBgLight,
  },
  line: {
    width: '30%',
    borderWidth: 1,
    borderColor: theme.colors.BtnBgLight,
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
});
