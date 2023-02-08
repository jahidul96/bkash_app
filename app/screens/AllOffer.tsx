import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {AppColor} from '../utils/AppColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputComp from '../components/InputComp';
import {Image} from 'react-native';
import {HEIGHT} from '../utils/AppDimension';
import LinkText from '../components/LinkText';
import {offerData} from '../data/offerData';
import {OfferItem} from '../components/OfferComp';

const img =
  'https://dcjctrdi66uhm.cloudfront.net/wp-content/uploads/2019/09/02151407/JMC-banner.jpg';

const AllOffer = () => {
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      {/* header content */}
      <Header back text="অফার" />

      {/* scroll content */}
      <ScrollView style={styles.mainContainer}>
        {/* input content */}
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={24} />
          <InputComp
            placeholder="search"
            extraInputStyle={styles.extraInputStyle}
            value={input}
            setValue={setInput}
          />
        </View>

        {/* ad banner */}
        <Image source={{uri: img}} style={styles.adBannerStyle} />

        {/* sob offer content */}
        <View style={styles.allOfferContainer}>
          {/* top text content */}
          <View style={styles.alltopContainer}>
            <Text>সব অফার</Text>
            <Text
              style={{
                color: AppColor.primary,
              }}>
              ফিল্টার করুন{' '}
            </Text>
          </View>

          {/* all offer items */}

          <View style={styles.offerItemContainer}>
            {offerData.map(item => (
              <OfferItem
                item={item}
                key={item.id}
                extraStyle={styles.itemExtraStyle}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AllOffer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  inputContainer: {
    width: '100%',
    height: 60,
    backgroundColor: AppColor.White,
    borderRadius: 30,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  extraInputStyle: {
    width: '90%',
    fontSize: 18,
    color: AppColor.primary,
  },
  adBannerStyle: {
    width: '100%',
    height: HEIGHT / 6,
  },
  allOfferContainer: {
    backgroundColor: AppColor.White,
    marginTop: 20,
    paddingVertical: 10,
  },
  alltopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomColor: AppColor.Gray,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  offerItemContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  itemExtraStyle: {
    marginBottom: 15,
  },
});
