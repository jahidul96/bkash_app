import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {AppColor} from '../../utils/AppColor';
import ContactProfile from '../../components/ContactProfile';
import InputComp from '../../components/InputComp';
import Ionincons from 'react-native-vector-icons/Ionicons';
import {taka} from '../../utils/fileExport';

const InputAmountPage = () => {
  const [type, setType] = useState(false);
  return (
    <View style={styles.container}>
      {/* header  */}
      <Header text="ক্যাশ আউট" back />

      <View style={styles.ContentWrapper}>
        {/* profile content */}
        <View style={styles.profileContainer}>
          <Text>এজেন্ট</Text>

          <View style={styles.profileWrapper}>
            <ContactProfile name="Jahidul Telecom" phone="01881383268" />
          </View>
        </View>

        {/*  */}
        <View style={[styles.profileContainer, {marginTop: 6}]}>
          <Text>পরিমান </Text>

          <View style={styles.inputContainer}>
            {type ? (
              <InputComp
                placeholder="0"
                extraInputStyle={styles.extraInputStyle}
              />
            ) : (
              <Pressable
                style={styles.placehoderCompStyle}
                onPress={() => {
                  setType(!type);
                }}>
                <Image source={taka} style={styles.takaIconStyle} />
                <Text style={styles.placeholderText}>0</Text>
              </Pressable>
            )}

            <Pressable
              onPress={() => {
                // navigation.navigate('InputAmountPage')
              }}>
              <Ionincons name="arrow-forward" size={28} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InputAmountPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ContentWrapper: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  profileContainer: {
    backgroundColor: AppColor.White,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  profileWrapper: {
    alignSelf: 'center',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColor.White,
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  placehoderCompStyle: {
    width: '80%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  takaIconStyle: {
    width: 30,
    height: 40,
    tintColor: AppColor.inActiveColor,
  },
  placeholderText: {
    fontSize: 40,
  },
  extraInputStyle: {
    width: '80%',
    textAlign: 'center',
    fontSize: 40,
    height: 70,
    color: AppColor.primary,
  },
});
