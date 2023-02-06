import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {AppColor} from '../utils/AppColor';

interface Props {
  text: string;
}
const LinkText: FC<Props> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Text style={styles.linkText}>সব দেখুন</Text>
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
