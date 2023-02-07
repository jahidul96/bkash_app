import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {AppColor} from '../utils/AppColor';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {HEIGHT} from '../utils/AppDimension';
import {logo} from '../utils/fileExport';
import {offerData} from '../data/offerData';

const img = 'https://i.ytimg.com/vi/mEj5E307azk/maxresdefault.jpg';

const Notification = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {offerData.map(data => (
          <NotifyCard key={data.id} data={data} />
        ))}
      </ScrollView>
    </View>
  );
};

interface Props {
  data: offer;
}

interface offer {
  id: number;
  img: any;
  name: string;
  offer: string;
}

const NotifyCard: FC<Props> = ({data}) => (
  <TouchableOpacity style={styles.notifyItemContainer}>
    <View style={styles.imgWraper}>
      <Image source={{uri: data?.img}} style={styles.imgStyle} />
    </View>
    <View style={styles.bottomContent}>
      <Image source={logo} style={styles.logoStyle} />
      <View style={styles.textContainer}>
        <Text>{data.offer}</Text>
        <Text>{data.name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.White,
    paddingHorizontal: 5,
  },
  notifyItemContainer: {
    marginTop: 10,
    backgroundColor: AppColor.White,
    elevation: 2,
    borderRadius: 5,
  },
  imgWraper: {
    width: '100%',
    height: HEIGHT / 4.5,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  logoStyle: {
    width: 60,
    height: 60,
    tintColor: AppColor.primary,
  },
  bottomContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
});
