import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import React, {FC} from 'react';
import {WIDTH} from '../utils/AppDimension';
import {payoption} from '../utils/Interfaces';
import {AppColor} from '../utils/AppColor';
import {useNavigation} from '@react-navigation/native';

interface Props {
  payoption: payoption;
  pay?: boolean;
}

const PayOptions: FC<Props> = ({payoption, pay}) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={[styles.itemWrapper]}
      onPress={() => navigation.navigate('PaymentMethodScreen')}>
      <Image source={payoption.icon} style={styles.iconStyle} />
      <Text style={styles.name}>{payoption.name}</Text>
    </Pressable>
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
