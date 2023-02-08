import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../utils/AppColor';
import InputComp from '../InputComp';
import Ionincons from 'react-native-vector-icons/Ionicons';
import {contacts, qrcode} from '../../utils/fileExport';
import ContactProfile from '../ContactProfile';
import {useNavigation} from '@react-navigation/native';

const AgentComp = () => {
  const navigation = useNavigation<any>();
  const [number, setNumber] = useState('');
  return (
    <View style={styles.container}>
      {/* input comp */}
      <View style={styles.inputContainer}>
        <InputComp
          placeholder="agent number"
          extraInputStyle={styles.extraInputStyle}
          keyboardType="phone-pad"
          value={number}
          setValue={setNumber}
        />
        <Pressable onPress={() => navigation.navigate('InputAmountPage')}>
          <Ionincons
            name="arrow-forward"
            size={28}
            color={
              number.length == 11 ? AppColor.primary : AppColor.inActiveColor
            }
          />
        </Pressable>
      </View>

      {/* qr code scan button */}
      <View style={styles.qrWrapper}>
        <Pressable style={styles.qrBtn}>
          <Image source={qrcode} style={styles.qrIconStyle} />
          <Text>QR কোড স্ক্যান করতে চাপুন!</Text>
        </Pressable>
      </View>

      {/* cash out in 14taka */}
      <View
        style={[
          styles.inputContainer,
          {paddingHorizontal: 20, paddingVertical: 15},
        ]}>
        <Image source={contacts} style={styles.contactIcon} />
        <Text style={styles.placeholderText}>
          হাজারে ১৪ ৫০ টাকাই ক্যাশ আউট করতে চাপুন!
        </Text>
      </View>

      {/* scroll and saved/samprotik content */}
      <ScrollView>
        {/* saved numers */}

        <View style={styles.contactWrapper}>
          <View style={styles.textWrapper}>
            <Text>সাম্প্রতিক</Text>
          </View>
          <ContactProfile name="Sayem Telecom" phone="01348586976" />
          <ContactProfile name="Jahid" phone="01881383269" />
        </View>
      </ScrollView>
    </View>
  );
};

export default AgentComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColor.White,
    marginTop: 6,
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  extraInputStyle: {
    width: '70%',
    fontSize: 16,
  },
  qrWrapper: {
    backgroundColor: AppColor.White,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
  qrBtn: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AppColor.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  qrIconStyle: {
    width: 15,
    height: 15,
    tintColor: AppColor.primary,
    marginRight: 5,
  },
  contactIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  placeholderText: {
    flex: 1,
    color: AppColor.primary,
  },
  contactWrapper: {
    backgroundColor: AppColor.White,
    marginVertical: 6,
    paddingBottom: 10,
  },
  textWrapper: {
    paddingVertical: 8,
    borderBottomColor: AppColor.Gray,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
});
