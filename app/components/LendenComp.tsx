import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import {person, taka} from '../utils/fileExport';

const data = [1, 2, 3, 4, 5, 6];
const LendenComp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColor.White,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map(d => (
          <PaymentNotifyItem key={d} />
        ))}
      </ScrollView>
    </View>
  );
};

const PaymentNotifyItem = () => (
  <View style={styles.itemContainer}>
    <View style={styles.profileWrapper}>
      <Image source={person} style={styles.imgStyle} />
    </View>
    <View style={styles.detailWrapper}>
      <Text style={styles.paymentText}>পেমেন্ট</Text>
      <Text style={styles.number}>01881383269</Text>
      <View style={styles.idContainer}>
        <Text style={styles.paymentText}>Trans ID : A3ffjj4ii5riit</Text>
        <Ionicons
          name="copy-outline"
          size={16}
          style={{
            marginLeft: 4,
          }}
        />
      </View>

      <View style={styles.flexStyle}>
        <Text>3:45pm 03/01/23</Text>
        <View style={styles.amountContainer}>
          <View style={styles.idContainer}>
            <Image source={taka} style={styles.takaIconStyle} />
            <Text style={styles.amount}>500.00</Text>
          </View>
          <Text> Charge : 7.45</Text>
        </View>
      </View>
    </View>
  </View>
);

export default LendenComp;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderBottomColor: AppColor.Gray,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  profileWrapper: {
    width: 60,
  },
  detailWrapper: {
    flex: 1,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  paymentText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: AppColor.inActiveColor,
  },
  number: {
    fontWeight: '600',
    fontSize: 15,
    marginVertical: 5,
  },
  flexStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    color: AppColor.primary,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  takaIconStyle: {
    width: 10,
    height: 15,
    tintColor: AppColor.primary,
    marginRight: 3,
    marginBottom: 3,
  },
});
