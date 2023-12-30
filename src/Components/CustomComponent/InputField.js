import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import theme from '../../Assets/Themes/theme';

const InputField = ({label, placeholder, xml, InputStyle, onFocus, onBlur, secureTextEntry, keyboardType}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={[styles.inputContainer, InputStyle]}>
        <TextInput
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
          label={label}
          placeholder={placeholder}
          style={[styles.input, InputStyle]}
          onFocus={onFocus}
          onBlur={onBlur}
        />
       {xml}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  labelContainer: {},
  labelText: {
    fontSize: 12,
    color: theme.colors.ParagraphColor,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.BorderInactiveColor,
    borderRadius: 9,
    paddingHorizontal: 8,
    marginTop: 5,
    width: '100%',
  },
  input: {
    fontSize: 16,
    color: theme.colors.ParagraphColor,
    width: '90%',
    marginLeft: 6,
  },
});

export default InputField;
