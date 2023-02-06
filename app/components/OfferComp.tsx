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

interface Props {
  data: Array<itemInterface>;
}

interface itemInterface {
  img: any;
  id: number;
  offer: string;
  name: string;
}
const OfferComp: FC<Props> = ({data}) => {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(item => {
          return (
            <TouchableOpacity style={styles.itemWrapper} key={item.id}>
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
        })}
      </ScrollView>
    </View>
  );
};

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
