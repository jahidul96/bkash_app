import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../utils/AppColor';
import HomeTopBar from '../components/HomeTopBar';
import PayOptions from '../components/PayOptions';
import {payOptions} from '../data/payOptionData';
import {HEIGHT, WIDTH} from '../utils/AppDimension';
import SuggestedComp from '../components/SuggestedComp';
import {myOfferData} from '../data/myoffer';
import Slider from '../components/Slider';
import {sliderData} from '../data/sliderData';
import LinkText from '../components/LinkText';
import {offerData} from '../data/offerData';
import OfferComp from '../components/OfferComp';
import {book} from '../utils/fileExport';
import ButtonComp from '../components/ButtonComp';
import {shebaData} from '../data/shebaData';

const HomeScreen = () => {
  const [showAllOPtion, setShowAllOption] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColor.primary} />
      {/* home topbar */}
      <View style={styles.topbarWrapper}>
        <HomeTopBar />
      </View>

      {/* scroll content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*  options contents */}
        <View
          style={[
            styles.payContainer,
            showAllOPtion == false && styles.payContainerExtraStyle,
          ]}>
          {payOptions.map(payoption => (
            <PayOptions key={payoption.id} payoption={payoption} pay={true} />
          ))}

          {/* toggler  */}
          {showAllOPtion == true ? (
            <View style={styles.opentogglerContainerWrapper}>
              <TouchableOpacity
                style={styles.opentogglerContainer}
                onPress={() => setShowAllOption(!showAllOPtion)}>
                <Text style={styles.toglerText}>বন্ধ করুন</Text>
                <Image
                  source={require('../assets/icons/up.png')}
                  style={styles.downIconStyle}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.togglerContainer}
              onPress={() => setShowAllOption(!showAllOPtion)}>
              <Text style={styles.toglerText}>আরো দেখুন</Text>
              <Image
                source={require('../assets/icons/down.png')}
                style={styles.downIconStyle}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* my saved  data */}
        <View style={styles.savedContentWrapper}>
          <View style={styles.saveContainer}>
            <View style={styles.linkTextWrapper}>
              <LinkText text="আমার বিকাশ" />
            </View>
            <SuggestedComp data={myOfferData} />
          </View>
        </View>

        {/*slider content */}
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
              {shebaData.map(payoption => (
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
    height: HEIGHT / 8.9,
  },
  payContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingBottom: 15,
    backgroundColor: AppColor.White,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 1,
    marginBottom: 15,
  },

  payContainerExtraStyle: {
    height: 190,
    overflow: 'hidden',
  },

  togglerContainer: {
    width: 78,
    height: 28,
    position: 'absolute',
    backgroundColor: AppColor.White,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    left: '40%',
    bottom: 6,
    elevation: 5,
    zIndex: 999,
  },

  downIconStyle: {
    width: 8,
    height: 6,
    marginLeft: 4,
  },

  toglerText: {
    fontSize: 10,
    color: AppColor.primary,
  },
  opentogglerContainerWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  opentogglerContainer: {
    width: 78,
    height: 28,
    backgroundColor: AppColor.White,
    borderRadius: 30,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
