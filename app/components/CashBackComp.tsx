import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {AppColor} from '../utils/AppColor';
import ButtonComp from './ButtonComp';

interface Props {
  text: any;
}
const CashBackComp: FC<Props> = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cashBackTextContainer}>
        <Text style={styles.text}>Cash Back</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.placeholderText}>{text}</Text>
        <Text style={styles.placeholderText}>৫০০০ পয়েন্ট</Text>
      </View>
      <ButtonComp
        text="সংগ্রহ করুন"
        extraStyle={styles.extraBtnStyle}
        extraTextStyle={styles.placeholderText}
      />
    </View>
  );
};

export default CashBackComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  cashBackTextContainer: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: AppColor.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: AppColor.White,
    fontWeight: 'bold',
    fontSize: 11,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  placeholderText: {
    fontSize: 13,
  },
  extraBtnStyle: {
    width: '30%',
    backgroundColor: AppColor.LightGray,
    borderRadius: 30,
    height: 36,
  },
});
