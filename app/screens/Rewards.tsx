import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {HEIGHT, WIDTH} from '../utils/AppDimension';
import {AppColor} from '../utils/AppColor';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinkText from '../components/LinkText';
import CashBackComp from '../components/CashBackComp';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Rewards = () => {
  return (
    <View style={styles.container}>
      {/* header  */}
      <Header text="বিকাশ রিওয়ার্ডস" />

      {/* point count content */}
      <View style={styles.boxContainer}>
        <View style={styles.boxContentWrapper}>
          {/* top content */}
          <View style={styles.topContentContainer}>
            <Text style={styles.name}>Jahidul islam</Text>
            <View style={styles.pointContainer}>
              <MaterialCommunityIcons
                name="star-circle"
                color={AppColor.White}
                size={20}
              />
              <Text style={styles.pointText}>3490 পয়েন্ট</Text>
            </View>
          </View>

          {/* box bottom content */}
          <View style={styles.levelContainer}>
            <Text style={styles.name}>গোল্ড</Text>
            <View style={styles.progress}>
              <View style={styles.progressReport} />
            </View>
            <Text style={[styles.name, {textAlign: 'center', fontSize: 14}]}>
              পয়েন্ট ববহার করলে লেভেলের অগ্রগতির কোনো প্রভাব পড়বে না
            </Text>
          </View>
        </View>
      </View>

      {/* scroll content */}
      <ScrollView
        style={{
          paddingHorizontal: 10,
        }}>
        {/* bkash rewards content */}

        <View style={styles.bkashRewardContainer}>
          <View style={styles.linkTextWrapper}>
            <LinkText text="বিকাশ রিওয়ার্ডস" />
          </View>
          {/* cashback buttom comp */}
          <CashBackComp text={'পে বিল এ ৬০টাকা পর্যন্ত্য ক্যাশব্যাক'} />
          <CashBackComp text={'পে বিল এ ৬০টাকা পর্যন্ত্য ক্যাশব্যাক'} />
          <CashBackComp text={'পে বিল এ ৬০টাকা পর্যন্ত্য ক্যাশব্যাক'} />
        </View>

        <View style={styles.descLinkWrapper}>
          <DescriptTionLinkComp />
          <DescriptTionLinkComp />
          <DescriptTionLinkComp />
          <DescriptTionLinkComp />
          <DescriptTionLinkComp />
        </View>
      </ScrollView>
    </View>
  );
};

const DescriptTionLinkComp = () => (
  <TouchableOpacity style={styles.descContainer}>
    <MaterialCommunityIcons
      name="star-circle"
      color={AppColor.primary}
      size={20}
    />
    <Text
      style={{
        marginLeft: 10,
      }}>
      পে বিল এ ৬০টাকা পর্যন্ত্য ক্যাশব্যাক
    </Text>
  </TouchableOpacity>
);

export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    width: WIDTH,
    height: HEIGHT / 3.8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  boxContentWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: AppColor.primary,
    borderRadius: 7,
    padding: 10,
  },
  topContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: AppColor.White,
    fontSize: 16,
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointText: {
    color: AppColor.White,
    marginLeft: 6,
    fontWeight: 'bold',
  },
  levelContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  progress: {
    width: '100%',
    height: 10,
    backgroundColor: AppColor.Gray,
    borderRadius: 20,
    marginVertical: 10,
    position: 'relative',
  },
  progressReport: {
    width: '70%',
    height: 10,
    backgroundColor: AppColor.White,
    position: 'absolute',
    borderRadius: 20,
    marginVertical: 10,
    top: -10,
  },
  bkashRewardContainer: {
    backgroundColor: AppColor.White,
  },
  linkTextWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: AppColor.Gray,
    borderBottomWidth: 1,
  },
  descLinkWrapper: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: AppColor.White,
  },
  descContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: AppColor.Gray,
    borderBottomWidth: 1,
  },
});
