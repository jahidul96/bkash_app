import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import HomeTopBar from '../components/HomeTopBar';
import PayOptions from '../components/PayOptions';
import {payOptions} from '../data/payOptionData';
import {WIDTH} from '../utils/AppDimension';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColor.primary} />
      {/* home topbar */}
      <View style={styles.topbarWrapper}>
        <HomeTopBar />
      </View>

      {/* scrol content */}
      <ScrollView>
        {/* payments options */}

        <View style={styles.payContainer}>
          {payOptions.map(payoption => (
            <PayOptions key={payoption.id} payoption={payoption} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbarWrapper: {
    width: WIDTH,
    backgroundColor: AppColor.White,
    height: 85,
  },
  payContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: AppColor.White,
  },
});
