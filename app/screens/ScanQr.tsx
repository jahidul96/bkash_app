import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';

const ScanQr = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: AppColor.primary,
          fontSize: 22,
          fontWeight: 'bold',
        }}>
        Scan Qr Not Implimented
      </Text>
    </View>
  );
};

export default ScanQr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.Black,
  },
});
