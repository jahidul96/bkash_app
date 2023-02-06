import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {WIDTH} from '../utils/AppDimension';
import {payoption} from '../utils/Interfaces';

interface Props {
  payoption: payoption;
}

const PayOptions: FC<Props> = ({payoption}) => {
  return (
    <TouchableOpacity style={styles.itemWrapper}>
      <Image source={payoption.icon} style={styles.iconStyle} />
      <Text style={styles.name}>{payoption.name}</Text>
    </TouchableOpacity>
  );
};

export default PayOptions;

const styles = StyleSheet.create({
  itemWrapper: {
    width: WIDTH / 4.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconStyle: {
    width: 32,
    height: 32,
  },
  name: {
    fontSize: 11,
    marginTop: 7,
  },
});
