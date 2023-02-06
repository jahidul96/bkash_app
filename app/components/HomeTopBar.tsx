import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {award, f2, frame, logo, person, taka} from '../utils/fileExport';
import {WIDTH} from '../utils/AppDimension';
import {AppColor} from '../utils/AppColor';

const HomeTopBar = () => {
  return (
    <View style={styles.container}>
      {/* profile section */}
      <View style={styles.profileContainer}>
        <TouchableOpacity
          onPress={() => console.log('hell')}
          style={styles.imgWrapper}>
          <Image source={frame} style={styles.frameStyle} />
          <Image source={person} style={styles.personimgStyle} />
        </TouchableOpacity>

        {/* name and balance comp */}
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Jahidul islam</Text>
          <TouchableOpacity style={styles.balanceWrapper}>
            <View style={styles.takaWrapper}>
              <Image source={taka} style={styles.takaImgStyle} />
            </View>
            <Text style={styles.seebalance}>ব্যালেন্স দেখুন</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Image source={award} style={styles.awardImgStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={logo} style={styles.logoImgStyle} />
          <View style={styles.logoPositionView} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeTopBar;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 85,
    backgroundColor: AppColor.primary,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  imgWrapper: {
    width: 55,
    height: 55,
  },
  frameStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    tintColor: '#fff',
    position: 'relative',
    backgroundColor: AppColor.primary,
  },
  personimgStyle: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 7,
    left: 8,
  },
  nameContainer: {
    marginLeft: 10,
    flex: 1,
  },
  balanceWrapper: {
    width: '90%',
    height: 32,
    backgroundColor: AppColor.White,
    borderRadius: 30,
    paddingHorizontal: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: AppColor.White,
    fontSize: 15,
    marginBottom: 3,
    marginLeft: 5,
  },
  takaWrapper: {
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.primary,
    borderRadius: 100,
  },
  takaImgStyle: {
    width: 13,
    height: 13,
    tintColor: AppColor.White,
  },
  seebalance: {
    marginLeft: 10,
    fontSize: 15,
    marginBottom: 3,
  },

  rightContainer: {
    flexDirection: 'row',
    width: '21%',
    justifyContent: 'space-between',
  },

  awardImgStyle: {
    width: 25,
    height: 25,
    tintColor: AppColor.White,
  },
  logoImgStyle: {
    width: 35,
    height: 25,
    tintColor: AppColor.White,
  },
  logoPositionView: {
    width: 10,
    height: 10,
    backgroundColor: 'transparent',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: AppColor.White,
    top: -14,
    right: 4,
    position: 'absolute',
  },
});
