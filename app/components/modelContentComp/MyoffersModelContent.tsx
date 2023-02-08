import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {FC} from 'react';
import {HEIGHT, WIDTH} from '../../utils/AppDimension';
import {AppColor} from '../../utils/AppColor';
import PayOptions from '../PayOptions';
import {myOfferData} from '../../data/myoffer';

interface Props {
  onPress: any;
  text: string;
}
const MyoffersModelContent: FC<Props> = ({onPress, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.topTitleContainer}>
          <Text>{text}</Text>
          <Pressable onPress={onPress}>
            <Text style={styles.closeText}>বন্ধ করুন</Text>
          </Pressable>
        </View>

        <View style={styles.offerOptionContainer}>
          {myOfferData.map(data => (
            <PayOptions key={data.id} payoption={data} pay={true} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default MyoffersModelContent;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: WIDTH,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  contentWrapper: {
    backgroundColor: AppColor.White,
    height: 500,
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  topTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    padding: 10,
    borderBottomColor: AppColor.Gray,
    borderBottomWidth: 1,
  },
  offerOptionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  closeText: {
    color: AppColor.primary,
  },
});
