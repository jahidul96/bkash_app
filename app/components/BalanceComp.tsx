import {StyleSheet, Text, View, Image} from 'react-native';
import React, {FC} from 'react';
import {taka} from '../utils/fileExport';
import {AppColor} from '../utils/AppColor';

interface Props {
  placeholderText: string;
  balance: string;
}
const BalanceComp: FC<Props> = ({placeholderText, balance}) => {
  return (
    <View style={styles.container}>
      <Text>{placeholderText}</Text>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: -3,
          marginVertical: 3,
        }}>
        <Image source={taka} style={styles.takaIconStyle} />
        <Text
          style={{
            color: AppColor.Black,
          }}>
          {balance}
        </Text>
      </View>
    </View>
  );
};

export default BalanceComp;

const styles = StyleSheet.create({
  container: {},
  takaIconStyle: {
    width: 15,
    height: 15,
  },
});
