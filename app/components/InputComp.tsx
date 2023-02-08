import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {FC} from 'react';

interface Props {
  placeholder: string;
  extraInputStyle?: any;
}

const InputComp: FC<Props> = ({placeholder, extraInputStyle}) => (
  <TextInput
    placeholder={placeholder}
    style={[styles.inputStyle, extraInputStyle]}
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
