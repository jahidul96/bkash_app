import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  Pressable,
  Modal,
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

import MyoffersModelContent from '../components/modelContentComp/MyoffersModelContent';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [showAllOption, setShowAllOption] = useState(false);
  const [showMyOffers, setShowMyOffers] = useState(false);
  const [showSuggesion, SetShowSuggesion] = useState(false);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColor.primary} barStyle="light-content" />
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
            showAllOption == false && styles.payContainerExtraStyle,
          ]}>
          {payOptions.map(payoption => (
            <PayOptions key={payoption.id} payoption={payoption} pay={true} />
          ))}

          {/* toggler  */}
          {showAllOption == true ? (
            <View style={styles.opentogglerContainerWrapper}>
              <Pressable
                style={styles.opentogglerContainer}
                onPress={() => setShowAllOption(!showAllOption)}>
                <Text style={styles.toglerText}>???????????? ????????????</Text>
                <Image
                  source={require('../assets/icons/up.png')}
                  style={styles.downIconStyle}
                />
              </Pressable>
            </View>
          ) : (
            <Pressable
              style={styles.togglerContainer}
              onPress={() => setShowAllOption(!showAllOption)}>
              <Text style={styles.toglerText}>????????? ???????????????</Text>
              <Image
                source={require('../assets/icons/down.png')}
                style={styles.downIconStyle}
              />
            </Pressable>
          )}
        </View>

        {/* my saved  data */}
        <View style={styles.savedContentWrapper}>
          <View style={styles.saveContainer}>
            <View style={styles.linkTextWrapper}>
              <LinkText
                text="???????????? ???????????????"
                onPress={() => setShowMyOffers(!showMyOffers)}
              />
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
              <LinkText
                text="??????????????????"
                onPress={() => SetShowSuggesion(!showSuggesion)}
              />
            </View>
            <SuggestedComp data={myOfferData} />
          </View>
        </View>

        {/* offer content */}
        <View style={[styles.savedContentWrapper, {marginVertical: 10}]}>
          <View style={styles.saveContainer}>
            <View style={styles.linkTextWrapper}>
              <LinkText
                text="????????????"
                onPress={() => navigation.navigate('AllOffer')}
              />
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
              <Text>???????????????????????? ????????????????????????</Text>
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
              ??????????????? ?????????????????? ??????
            </Text>
            <Text>??????????????? ???????????? ????????? ????????????</Text>
            <ButtonComp
              text={'???????????? ?????? ????????????'}
              extraStyle={styles.extraBtnStyle}
              onPress={() => navigation.navigate('PaymentMethodScreen')}
            />
          </View>
        </View>
      </ScrollView>

      {/* models content */}

      {/* my offers */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showMyOffers}
        onRequestClose={() => setShowMyOffers(!showMyOffers)}>
        <MyoffersModelContent
          text="???????????? ???????????????"
          onPress={() => setShowMyOffers(!showMyOffers)}
        />
      </Modal>

      {/* suggestions */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSuggesion}
        onRequestClose={() => SetShowSuggesion(!showSuggesion)}>
        <MyoffersModelContent
          text="??????????????????"
          onPress={() => SetShowSuggesion(!showSuggesion)}
        />
      </Modal>
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
    bottom: 10,
    elevation: 3,
    zIndex: 999,
  },

  downIconStyle: {
    width: 8,
    height: 6,
    marginLeft: 4,
    tintColor: AppColor.primary,
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

    height: 40,
    marginTop: 10,
  },
});
