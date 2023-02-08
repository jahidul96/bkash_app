import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {FC} from 'react';

interface Props {
  placeholder: string;
  extraInputStyle?: any;
  keyboardType?: any;
  setValue: any;
  value: any;
}

const InputComp: FC<Props> = ({
  placeholder,
  extraInputStyle,
  keyboardType,
  value,
  setValue,
}) => (
  <TextInput
    placeholder={placeholder}
    style={[styles.inputStyle, extraInputStyle]}
    keyboardType={keyboardType}
    value={value}
    onChangeText={text => setValue(text)}
  />
);

export default InputComp;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'transparent',
    height: 45,
    width: '100%',
    paddingLeft: 10,
  },
});
