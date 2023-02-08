import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React, {FC} from 'react';
import {AppColor} from '../../utils/AppColor';
import BalanceComp from '../BalanceComp';
import ContactProfile from '../ContactProfile';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {contacts, logo, tapImg} from '../../utils/fileExport';

interface Props {
  setShowModal: any;
  showModal: any;
}
const PayModalContent: FC<Props> = ({setShowModal, showModal}) => {
  return (
    <>
      {/* main contentWrapper */}
      <View style={styles.modalContentWrapper}>
        <ScrollView
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          {/* cross button */}
          <Pressable
            style={styles.crossIconWrapperStyle}
            onPress={() => setShowModal(!showModal)}>
            <Entypo name="cross" size={30} color={AppColor.primary} />
          </Pressable>
          {/* send money && profile */}
          <View
            style={{
              marginVertical: 10,
            }}>
            <View style={styles.flexStyle}>
              <Text style={styles.sendMoneyText}>সেন্ড মানি </Text>
              <Text
                style={[
                  styles.sendMoneyText,
                  {fontWeight: '600', marginLeft: 4},
                ]}>
                নিশ্চিত করুন
              </Text>
            </View>
            {/* reciver profile content */}
            <View
              style={{
                alignItems: 'center',
                marginTop: 10,
              }}>
              <ContactProfile name="Haris" phone="01881383269" />
            </View>
          </View>

          {/* balance info container */}
          <View style={styles.balanceInfoStyle}>
            <View style={[styles.leftBalContainer, styles.borderStyle]}>
              <BalanceComp placeholderText="সর্বমোট" balance="500.00" />
              <View style={styles.flexStyle}>
                <Feather name="plus" />
                <Text>চার্জ প্রযোজ্য নয় </Text>
              </View>
            </View>
            <View style={styles.leftBalContainer}>
              <BalanceComp placeholderText="নতুন ব্যালেন্স" balance="900.00" />
            </View>
          </View>

          {/* info scroll text content */}
          <View style={styles.textContentWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image source={contacts} style={styles.contactIcon} />
                <Text
                  style={{
                    paddingHorizontal: 10,
                    lineHeight: 20,
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release{' '}
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        {/* send button */}
        <Pressable style={styles.sendButtonStyle}>
          <ImageBackground source={tapImg} style={styles.tapImgStyle}>
            <Image source={logo} style={styles.logoStyle} />
            <Text
              style={{
                color: AppColor.White,
                fontSize: 16,
                marginTop: 5,
                fontWeight: 'bold',
              }}>
              সেন্ড মানি করতে এখনই ট্যাপ করুন{' '}
            </Text>
          </ImageBackground>
        </Pressable>
      </View>
    </>
  );
};

export default PayModalContent;

const styles = StyleSheet.create({
  modalContentWrapper: {
    backgroundColor: AppColor.White,
    flex: 1,
  },
  crossIconWrapperStyle: {
    alignSelf: 'flex-end',
  },

  sendMoneyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: AppColor.primary,
  },
  flexStyle: {
    flexDirection: 'row',
  },
  balanceInfoStyle: {
    flexDirection: 'row',
    borderTopColor: AppColor.Gray,
    borderTopWidth: 1,
    borderBottomColor: AppColor.Gray,
    borderBottomWidth: 1,
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  leftBalContainer: {
    width: '50%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  borderStyle: {
    borderRightWidth: 1,
    borderRightColor: AppColor.Gray,
  },
  textContentWrapper: {
    width: '100%',
    height: 140,
    padding: 10,
  },
  contactIcon: {
    width: 30,
    height: 30,
  },
  sendButtonStyle: {
    width: '100%',
    height: 110,
    backgroundColor: AppColor.primary,
  },
  tapImgStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 40,
    height: 30,
    tintColor: AppColor.White,
  },
});
