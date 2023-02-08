import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {AppColor} from '../utils/AppColor';

interface Props {
  text: string;
  onPress?: any;
}
const LinkText: FC<Props> = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.linkText}>সব দেখুন</Text>
      </Pressable>
    </View>
  );
};

export default LinkText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkText: {
    color: AppColor.primary,
  },
});
