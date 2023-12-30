import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../../Assets/Themes/theme';

const Button = ({ title, Btnstyle, onPress, TextStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, Btnstyle]} onPress={onPress}>
      <Text style={[styles.buttonText, TextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.BtnBgLight,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: theme.colors.White
  },
});

export default Button;
