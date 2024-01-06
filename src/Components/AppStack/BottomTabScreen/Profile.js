import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import theme from '../../../Assets/Themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../Assets/Icons';
import Button from '../../CustomComponent/Button';
import { useNavigation } from '@react-navigation/native';
import AddEducation from './AddEducation';

const Profile = () => {
  const navigation = useNavigation()
  const FamilyMembers = () => {
    navigation.navigate('FamilyMembers')
  }
  const AddToBusiness = () => {
    navigation.navigate('AddToBusiness')
  }
  const AddEducation = () => {
    navigation.navigate('AddEducation')
  }
  return (
    <View style={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={require('../../../Assets/images/image3.jpg')}
            style={styles.HeaderImage}
          />
          <View style={styles.UserProfile}>
            <View style={[styles.EditIconContainer, styles.BlueMark]}>
              <TouchableOpacity style={styles.TouchableOpacity}>
                <Image
                  source={require('../../../Assets/images/UserProfile.png')}
                  style={styles.userImage}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.EditIcon}>
                <SvgFromXml xml={Icons.EditIcon} />
              </TouchableOpacity>
              <View style={styles.BlueMarkin}>
                <SvgFromXml xml={Icons.BlueMark} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.OuterMostContainer}>
          <Text style={styles.Heading}>Mehul Bhanderi</Text>
        </View>
        <View style={styles.TopBox}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            
            <Text style={[styles.Paragraph, {marginTop: 5}]}>QR Code</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../../../Assets/images/Treeform.png')}
              style={styles.QrCode}
            />
            <TouchableOpacity onPress={()=>FamilyMembers()}>
            <Text style={[styles.Paragraph, {marginTop: 5}]}>Family Members</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Frame}>
          <View style={styles.VerificationStatus}>
            <Text
              style={[
                styles.Heading,
                {fontSize: 14, color: theme.colors.Black},
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
        <View style={styles.Box2}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.Heading, {fontSize: 14}]}>
              Location Details
            </Text>
            <Text style={[styles.Paragraph, {color: theme.colors.Grey}]}>
              Edit
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderColor: theme.colors.BorderInactiveColor,
              borderWidth: 2,
              marginVertical: 10,
            }}></View>
          <View style={[styles.TextContainer, {height: 120, width: '100%'}]}>
            <Text style={styles.firstText}>Native Village</Text>
            <Text style={styles.secondText}>
              Latipur, Dhumol, Jamnagar, Gujrat
            </Text>
            <Text style={styles.firstText}>Current City Village</Text>
            <Text style={styles.secondText}>
              Rajkot, Gujrat, India, 6730000
            </Text>
          </View>
        </View>
        {/* start */}
        <View style={[styles.Box2, {height: 190}]}>
          <View style={styles.InnerBox2}>
            <Text style={[styles.Heading, {fontSize: 14}]}>Business</Text>
            <Text style={[styles.Paragraph, {color: theme.colors.Blue}]}>
              Add
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderWidth: 2,
              marginTop: 10,
              borderColor: theme.colors.BorderInactiveColor,
            }}></View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}>
            <Text style={[styles.secondText, {fontSize: 10}]}>
              No Business Found
            </Text>
            <View style={{marginVertical: 10}}>
              <Button
                title="Add Business"
                TextStyle={{paddingHorizontal: 40, height: 30}}
                onPress={()=>AddToBusiness()}
              />
            </View>
          </View>
        </View>
        {/* End */}
        <View style={[styles.Box2, {height: 190}]}>
          <View style={styles.InnerBox2}>
            <Text style={[styles.Heading, {fontSize: 14}]}>Education</Text>
            <Text style={[styles.Paragraph, {color: theme.colors.Blue}]}>
              Add
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderWidth: 2,
              marginTop: 10,
              borderColor: theme.colors.BorderInactiveColor,
            }}></View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}>
            <Text style={[styles.secondText, {fontSize: 10}]}>
              No Education added yet
            </Text>
            <View style={{marginVertical: 10}}>
              <Button
                title="Add Education"
                TextStyle={{paddingHorizontal: 40, height: 30}}
                onPress={()=>AddEducation()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  MainContainer: {
    paddingHorizontal: 20,
  },
  HeaderImage: {
    width: '100%',
    height: 123,
    marginTop: 30,
    borderRadius: 16,
  },
  UserProfile: {
    width: '100%',
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  TouchableOpacity: {
    borderRadius: 100,
    width: 123,
    height: 123,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: 8,
    borderWidth: 5,
    borderColor: theme.colors.White,
    bottom: 9,
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
  EditIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  userImage: {
    width: 115,
    height: 115,
    borderRadius: 100,
  },
  BlueMark: {
    width: 115,
    height: 120,
    position: 'absolute',
    borderColor: theme.colors.White,
  },
  BlueMarkin: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 50,
    right: 0,
    top: 0,
  },
  OuterMostContainer: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
  Heading: {
    fontSize: 22,
    fontFamily: theme.fonts.PlusJakartaSans,
    color: theme.colors.Black,
  },
  Paragraph: {
    color: theme.colors.ParagraphColor,
    fontFamily: theme.fonts.PlusJakartaSans,
    fontSize: 14,
  },
  TopBox: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 3,
    borderRadius: 16,
    borderColor: theme.colors.BorderInactiveColor,
    height: 125,
    marginTop: 20,
    justifyContent: 'space-around',
  },
  QrCode: {
    width: 67,
    height: 67,
  },
  OuterBox: {
    width: '100%',
    borderWidth: 3,
    borderRadius: 16,
    borderColor: theme.colors.BorderInactiveColor,
    height: 163,
    marginTop: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  TopBox1: {
    width: '100%',
    flexDirection: 'row',
  },
  Score: {
    width: '50%',
    height: 5,
    marginTop: 12,
    borderColor: theme.colors.BorderInactiveColor,
    backgroundColor: theme.colors.BorderInactiveColor,
    justifyContent: 'center',
    borderRadius: 30,
  },
  innerScore: {
    height: 5,
    width: 20,
    backgroundColor: theme.colors.Green,
    borderColor: theme.colors.Green,
    borderRadius: 30,
  },
  innerScore2: {
    height: 5,
    width: 80,
    borderColor: theme.colors.Green,
    borderRadius: 30,
  },
  Box2: {
    height: 150,
    width: '100%',
    marginVertical: 20,
    borderRadius: 16,
    borderColor: theme.colors.BorderInactiveColor,
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  firstText: {
    color: theme.colors.Grey,
    fontSize: 10,
  },
  secondText: {
    color: theme.colors.Grey,
    fontSize: 12,
    fontFamily: theme.fonts.PlusJakartaSansSamiBold,
  },
  ContainerFaimilyDetail: {
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FamilyDetail: {
    width: '55%',
    height: 110,
  },
  CardContainer: {
    width: '100%',
    height: 100,
    borderRadius: 16,
    borderColor: theme.colors.BorderInactiveColor,
    borderWidth: 3,
    marginVertical: 20,
    flexDirection: 'row',
  },
  CardImage: {
    width: '100%',
    height: 94,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  InnerBox2: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  VerificationStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  Heading: {
    fontSize: 22,
    fontFamily: theme.fonts.PoppinsSemiBold,
    color: theme.colors.Black,
    alignItems: 'center',
  },
});
