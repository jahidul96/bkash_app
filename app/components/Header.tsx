import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {HEIGHT, WIDTH} from '../utils/AppDimension';
import {AppColor} from '../utils/AppColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import {logo} from '../utils/fileExport';
import {useNavigation} from '@react-navigation/native';

interface Props {
  text: string;
}
const Header: FC<Props> = ({text}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={25}
        color={AppColor.White}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>{text}</Text>
      <Image source={logo} style={styles.logoStyle} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT / 12,
    backgroundColor: AppColor.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColor.White,
  },
  logoStyle: {
    width: 30,
    height: 30,
    tintColor: AppColor.White,
  },
});
