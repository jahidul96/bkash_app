import {StyleSheet, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {FC} from 'react';
import {AppColor} from '../utils/AppColor';

interface Props {
  text: any;
  extraStyle?: any;
  extraTextStyle?: any;
  onPress?: any;
}
const ButtonComp: FC<Props> = ({text, extraStyle, extraTextStyle, onPress}) => {
  return (
    <Pressable style={[styles.btnStyle, extraStyle]} onPress={onPress}>
      <Text style={[styles.text, extraTextStyle]}>{text}</Text>
    </Pressable>
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
    marginBottom: 10,
    borderWidth: 1,
    borderColor: AppColor.primary,
  },
  text: {},
});
