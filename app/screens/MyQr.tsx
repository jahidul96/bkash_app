import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {ScrollView} from 'react-native';
import {AppColor} from '../utils/AppColor';
import {HEIGHT} from '../utils/AppDimension';
import {logo, myQr} from '../utils/fileExport';
import ButtonComp from '../components/ButtonComp';

const MyQr = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header text="My QR" back nomenu />

      {/* scroll content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 15,
        }}>
        <View style={styles.contentWrapper}>
          {/* qr code */}
          <View style={styles.qrContainer}>
            <ImageBackground
              source={myQr}
              style={styles.qrStyle}
              resizeMode={'cover'}>
              <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logoStyle} />
              </View>
            </ImageBackground>
          </View>

          {/* text */}

          <Text
            style={{
              fontSize: 17,
              color: AppColor.primary,
              textAlign: 'center',
            }}>
            এই Qr কোডটি স্ক্যান করে সেন্ড মানি করতে বলুন!
          </Text>

          {/* buttons */}
          <View
            style={{
              marginVertical: 15,
            }}>
            <ButtonComp
              text="Qr Download"
              extraStyle={styles.extraBtnStyle}
              extraTextStyle={styles.extraTextStyle}
            />
            <ButtonComp
              text="Share"
              extraStyle={styles.extraBtnStyle}
              extraTextStyle={styles.extraTextStyle}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyQr;

const styles = StyleSheet.create({
  contentWrapper: {
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: AppColor.White,
    paddingVertical: 20,
  },
  qrContainer: {
    width: '100%',
    height: HEIGHT / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    width: 60,
    height: 60,
    backgroundColor: AppColor.White,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  logoStyle: {
    width: 45,
    height: 45,
    tintColor: AppColor.primary,
    marginLeft: 5,
  },
  extraBtnStyle: {
    backgroundColor: AppColor.primary,
    height: 45,
    borderRadius: 30,
  },
  extraTextStyle: {
    color: AppColor.White,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
