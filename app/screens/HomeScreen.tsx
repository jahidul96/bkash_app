import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import HomeTopBar from '../components/HomeTopBar';

const HomeScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={AppColor.primary} />
      {/* home topbar */}
      <HomeTopBar />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
