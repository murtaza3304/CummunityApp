import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import theme from '../../../../Assets/Themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../../Assets/Icons';
import Button from '../../../CustomComponent/Button';
import { useNavigation } from '@react-navigation/native';

const RegistrationDetail = () => {
  const navigation = useNavigation()
  const BackToHome = () => {
    navigation.navigate('BottomTabs')

  }
  return (
    <View style={styles.Container}>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.TopBarStyle}>
          <Text style={styles.Heading}>Profile Registration Detail</Text>
          <Text style={[styles.Paragraph, {fontSize: 14}]}>
            Don't worry only you can see your personal Data
          </Text>
        </View>
        <View style={styles.ProfileStatus}>
          <View style={styles.VerificationStatus}>
            <Text style={[styles.Heading, {fontSize: 14}]}>
              Verification Status
            </Text>
            <Text style={[styles.Paragraph, {color: theme.colors.Yellow}]}>
              Under Process
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: theme.colors.Yellow,
              width: '100%',
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              height: '60%',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View>
              <SvgFromXml xml={Icons.VerifyStatus} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{color: theme.colors.Grey}}>Dear User</Text>
              <Text
                style={{
                  fontSize: 14,
                  color: theme.colors.Grey,
                  fontFamily: theme.fonts.PlusJakartaSansSamiBold,
                }}>
                Pending
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.UserProfile}>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Image
              source={require('../../../../Assets/images/BoyImage.jpg')}
              style={styles.userImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.EditIcon}>
            <SvgFromXml xml={Icons.EditIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.Frame}>
          <View style={styles.VerificationStatus}>
            <Text
              style={[
                styles.Heading,
                {fontSize: 14, color: theme.colors.Grey},
              ]}>
              Basic Details
            </Text>
            <Text style={[styles.Paragraph, {color: theme.colors.Grey}]}>
              Edit
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: theme.colors.BorderInactiveColor,
              width: '100%',
            }}></View>
          <View
            style={{
              height: '25%',
            }}>
            <View style={styles.innerFrame}>
              <View style={styles.TextContainer}>
                <Text style={styles.firstText}>First Name</Text>
                <Text style={styles.secondText}>Mehul</Text>
              </View>
              <View>
                <Text style={styles.firstText}>First Name</Text>
                <Text style={styles.secondText}>Mehul</Text>
              </View>
            </View>
            <View style={styles.innerFrame}>
              <View style={styles.TextContainer}>
                <Text style={styles.firstText}>First Name</Text>
                <Text style={styles.secondText}>Mehul</Text>
              </View>
              <View>
                <Text style={styles.firstText}>First Name</Text>
                <Text style={styles.secondText}>Mehul</Text>
              </View>
            </View>
            <View style={styles.innerFrame}>
              <View style={styles.TextContainer}>
                <Text style={styles.firstText}>First Name</Text>
                <Text style={styles.secondText}>Mehul</Text>
              </View>
              <View>
                <Text style={styles.firstText}>First Name</Text>
                <Text style={styles.secondText}>Mehul</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.Frame, {height: 170}]}>
          <View style={styles.VerificationStatus}>
            <Text
              style={[
                styles.Heading,
                {fontSize: 14, color: theme.colors.Grey},
              ]}>
              Location Details
            </Text>
            <Text style={[styles.Paragraph, {color: theme.colors.Grey}]}>
              Edit
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: theme.colors.BorderInactiveColor,
              width: '100%',
            }}></View>
          <View
            style={{
              height: '30%',
              height: 100
            }}>
            <View style={styles.innerFrame}>
              <View style={[styles.TextContainer,{height: 120, width: '100%'}]}>
                <Text style={styles.firstText}>Native Village</Text>
                <Text style={styles.secondText}>Latipur, Dhumol, Jamnagar, Gujrat</Text>
                <Text style={styles.firstText}>Current City Village</Text>
                <Text style={styles.secondText}>Rajkot, Gujrat, India, 6730000</Text>
                
                
              </View>  
            </View>
          </View>
        </View>
        <View style={styles.Frame}>
          <View style={styles.VerificationStatus}>
            <Text
              style={[
                styles.Heading,
                {fontSize: 14, color: theme.colors.Grey},
              ]}>
              Basic Details
            </Text>
            <Text style={[styles.Paragraph, {color: theme.colors.Grey}]}>
              Edit
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: theme.colors.BorderInactiveColor,
              width: '100%',
            }}></View>
          <View
            style={{
              height: '25%',
            }}>
            <View style={[styles.innerFrame, {width: '100%'}]}>
              <View style={styles.TextContainer}>
                <Text style={styles.firstText}>First Name</Text>
                <Image
                  source={require('../../../../Assets/images/UserProfile.png')}
                  style={styles.ProfileImage}
                />
              </View>
              <View>
                <Text style={styles.firstText}>First Name</Text>
                <Image
                  source={require('../../../../Assets/images/idCard.png')}
                  style={styles.IdCard}
                />
              </View>
            </View>
          </View>
          
        </View>
        <View style={{marginBottom: 20}}>
            <Button title='Back To Home' onPress={BackToHome}/>
          </View>
      </ScrollView>
    </View>
  );
};

export default RegistrationDetail;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
  },
  TopBarStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
  ProfileStatus: {
    width: '100%',
    height: 118,
    borderColor: theme.colors.Yellow,
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 20,
    paddingHorizontal: 20,
  },

  VerificationStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  UserProfile: {
    width: '100%',
    height: 135,
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
  userImage: {
    width: 115,
    height: 115,
    borderRadius: 100,
  },
  Frame: {
    width: '100%',
    height: 200,
    borderColor: theme.colors.BorderInactiveColor,
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  innerFrame: {
    width: '70%',
    paddingVertical: 10,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextContainer: {},
  firstText: {
    color: theme.colors.Grey,
    fontSize: 10,
  },
  secondText: {
    color: theme.colors.Grey,
    fontSize: 12,
    fontFamily: theme.fonts.PlusJakartaSansSamiBold,
  },
  ProfileImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  IdCard: {
    width: 150,
    height: 100,
    marginTop: 10,
  },
});
