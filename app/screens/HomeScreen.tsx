import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import HomeTopBar from '../components/HomeTopBar';
import PayOptions from '../components/PayOptions';
import {payOptions} from '../data/payOptionData';
import {WIDTH} from '../utils/AppDimension';
import SuggestedComp from '../components/SuggestedComp';
import {myOfferData} from '../data/myoffer';
import Slider from '../components/Slider';
import {sliderData} from '../data/sliderData';
import LinkText from '../components/LinkText';
import {offerData} from '../data/offerData';
import OfferComp from '../components/OfferComp';
import {book} from '../utils/fileExport';
import ButtonComp from '../components/ButtonComp';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColor.primary} />
      {/* home topbar */}
      <View style={styles.topbarWrapper}>
        <HomeTopBar />
      </View>

      {/* scrol content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* payments options */}
        <View style={styles.payContainer}>
          {payOptions.map(payoption => (
            <PayOptions key={payoption.id} payoption={payoption} />
          ))}
        </View>

        {/* saved data */}
        <View style={styles.savedContentWrapper}>
          <View style={styles.saveContainer}>
            <View style={styles.linkTextWrapper}>
              <LinkText text="আমার বিকাশ" />
            </View>
            <SuggestedComp data={myOfferData} />
          </View>
        </View>

        {/* carosel data */}
        <View style={styles.sliderWrapper}>
          <Slider data={sliderData} />
        </View>

        {/* suggestion content */}
        <View style={[styles.savedContentWrapper]}>
          <View style={styles.saveContainer}>
            <View style={styles.linkTextWrapper}>
              <LinkText text="সাজেশন" />
            </View>
            <SuggestedComp data={myOfferData} />
          </View>
        </View>

        {/* offer content */}
        <View style={[styles.savedContentWrapper, {marginVertical: 10}]}>
          <View style={styles.saveContainer}>
            <View style={styles.linkTextWrapper}>
              <LinkText text="অফার" />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              <OfferComp data={offerData} />
            </View>
          </View>
        </View>

        {/* onnano sheba content */}
        <View style={[styles.savedContentWrapper]}>
          <View style={styles.saveContainer}>
            <View style={styles.linkTextWrapper}>
              <Text>অন্নান্য সেবাসমূহ</Text>
            </View>

            <View
              style={[styles.payContainer, {elevation: 0, marginBottom: 0}]}>
              {payOptions.slice(0, 8).map(payoption => (
                <PayOptions key={payoption.id} payoption={payoption} />
              ))}
            </View>
          </View>
        </View>

        {/* school/clg feee content */}
        <View style={styles.sclContainer}>
          <View style={styles.sclContentWrapper}>
            <Image source={book} style={styles.bookImgStyle} />
            <Text
              style={{
                marginBottom: 5,
              }}>
              স্কুল কলেজের ফী
            </Text>
            <Text>বিকাশ করুন ঘরে বসেই</Text>
            <ButtonComp
              text={'এখনই পে করুন'}
              extraStyle={styles.extraBtnStyle}
            />
          </View>
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
    paddingBottom: 25,
    backgroundColor: AppColor.White,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 1,
    marginBottom: 15,
  },
  savedContentWrapper: {
    width: WIDTH,
    paddingHorizontal: 10,
  },
  saveContainer: {
    width: '100%',

    backgroundColor: AppColor.White,
    elevation: 1,
    borderRadius: 5,
  },
  sliderWrapper: {
    width: WIDTH,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginVertical: 10,
  },
  linkTextWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderBottomColor: AppColor.Gray,
    borderBottomWidth: 1,
  },
  sclContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  sclContentWrapper: {
    width: '100%',
    height: 220,
    backgroundColor: AppColor.White,
    elevation: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookImgStyle: {
    width: 60,
    height: 60,
    marginBottom: 15,
  },
  extraBtnStyle: {
    width: '45%',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: AppColor.primary,
    height: 40,
    marginTop: 10,
  },
});
