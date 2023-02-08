import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Ionincons from 'react-native-vector-icons/Ionicons';
import {AppColor} from '../utils/AppColor';

interface Props {
  name: string;
  phone: string;
}

const ContactProfile: FC<Props> = ({name, phone}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicWrapper}>
        <Ionincons name="person" size={25} />
      </View>
      <View>
        <Text
          style={{
            fontWeight: '700',
            color: AppColor.Black,
          }}>
          {name}
        </Text>
        <Text>{phone}</Text>
      </View>
    </View>
  );
};

export default ContactProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  profilePicWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    backgroundColor: AppColor.LightGray,
    borderRadius: 100,
    marginRight: 10,
  },
});
