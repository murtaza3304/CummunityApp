import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import Icons from '../../../Assets/Icons';
import theme from '../../../Assets/Themes/theme';
import Button from '../../CustomComponent/Button';
import { useNavigation } from '@react-navigation/native';

const UserScreen3 = () => {
  const navigation = useNavigation()
  const BackArrowBtn = ()=> {
    navigation.navigate('BottomTabs')
  }
  const Continue = () => {
    navigation.navigate('BasicDetails')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../Assets/images/image1.jpg')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>BackArrowBtn()}>
          <SvgFromXml xml={Icons.BackArrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.nameStyle}>
        <Text style={styles.Heading}>Mehul Bhandare</Text>
        <TouchableOpacity>
          <Text style={styles.Paragraph}>Show Map</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textStyle}>
        <TouchableOpacity>
          <SvgFromXml xml={Icons.StarIcon} />
        </TouchableOpacity>
        <Text style={{color: theme.colors.Grey}}>4.5 (355 Reviews)</Text>
      </View>
      <View>
        <Text style={{color: theme.colors.Grey}}>
          To place the back arrow SVG on top of the image, you should adjust the
          styles accordingly. You can use absolute positioning to overlay the
          SVG on the image. Here's an updated version of your code:
        </Text>
      </View>
      <View>
        <Text style={[styles.Heading, {marginTop: 10}]}>Details</Text>
      </View>
      <View style={{marginTop: 12}}>
        <Button title="Continue"  onPress={()=>Continue()}/>
      </View>
    </View>
  );
};

export default UserScreen3;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 12,
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 320,
  },
  image: {
    width: '100%',
    height: 320,
    borderRadius: 9,
  },

  TouchableOpacity: {
    position: 'absolute',
    backgroundColor: theme.colors.White,
    paddingHorizontal: 10,
    paddingVertical: 7,
    top: 8,
    left: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  nameStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  Heading: {
    fontSize: 22,
    color: theme.colors.Black,
    fontFamily: theme.fonts.PlusJakartaSansSamiBold,
  },
  Paragraph: {
    color: theme.colors.ButtonBackground,
    fontFamily: theme.fonts.PlusJakartaSansSamiBold,
    fontSize: 14,
    marginTop: 10,
  },
  textStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
