import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {WIDTH} from '../utils/AppDimension';
import {AppColor} from '../utils/AppColor';
import {itemInterface} from '../utils/Interfaces';

interface Props {
  data: Array<itemInterface>;
}

const OfferComp: FC<Props> = ({data}) => {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(item => (
          <OfferItem item={item} key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
};

interface ItemProps {
  item: itemInterface;
  extraStyle?: any;
}
export const OfferItem: FC<ItemProps> = ({item, extraStyle}) => (
  <TouchableOpacity style={[styles.itemWrapper, extraStyle]}>
    <Image source={{uri: item.img}} style={styles.imgStyle} />
    <View style={{paddingHorizontal: 10, marginTop: 7}}>
      <Text
        style={{
          marginBottom: 3,
        }}>
        {item.offer}
      </Text>
      <Text
        style={{
          fontSize: 12,
        }}>
        {item.name}
      </Text>
    </View>
  </TouchableOpacity>
);

export default OfferComp;

const styles = StyleSheet.create({
  itemWrapper: {
    width: WIDTH / 2.6,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: AppColor.White,
    marginRight: 10,
    marginBottom: 5,
    paddingBottom: 6,
  },
  imgStyle: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
