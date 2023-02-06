import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';

interface Props {
  text: any;
  extraStyle?: any;
  extraTextStyle?: any;
}
const ButtonComp: FC<Props> = ({text, extraStyle, extraTextStyle}) => {
  return (
    <TouchableOpacity style={[styles.btnStyle, extraStyle]}>
      <Text style={[styles.text, extraTextStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  text: {},
});
