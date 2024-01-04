import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Button from '../CustomComponent/Button';
import theme from '../../Assets/Themes/theme';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const Screen1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Use a longer timeout to make sure the splash screen covers the entire screen
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000); // Adjust the timeout duration as needed
  }, []);

  const Explore = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/images/Rectangle.png')}
        style={styles.bgImage}>
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
          <Button
            title='Explore'
            style={[styles.CustomButton, ]}
            TextStyle={styles.TextStyle}
            Btnstyle={styles.Btnstyle}
            onPress={() => Explore()}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  TextStyle: {
    fontFamily: theme.fonts.PoppinsSemiBold,
    paddingVertical: 4,
    color: theme.colors.White,
    fontSize: 16,

  },
  Btnstyle: {
    width: '84%',
    position: 'absolute',
    bottom: 20,
  },
});
