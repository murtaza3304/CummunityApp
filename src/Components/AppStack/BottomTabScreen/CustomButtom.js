import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../../../Assets/Themes/theme';

const CustomButton = ({ title, onPress, isActive }) => (
  <TouchableOpacity
  style={[
    styles.button,
    { backgroundColor: isActive ? theme.colors.LightBlue : 'transparent' },
  ]}
  onPress={onPress}
>
  <Text style={[styles.text, { color: isActive ? theme.colors.Blue : theme.colors.ParagraphColor }]}>
    {title}
  </Text>
</TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 12,
    margin: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 14,
    color: theme.colors.ParagraphColor,
  },
  text: {
    fontFamily: theme.fonts.PoppinsBold,
    fontSize: 13

  }
});
