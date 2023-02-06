import * as React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface Props {
  data: any;
}
const Slider: React.FC<Props> = ({data}) => {
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1}}>
      <Carousel
        autoPlayInterval={5000}
        loop
        width={width - 20}
        height={width / 2.5}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={500}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              padding: 5,
            }}>
            <Image
              source={{uri: item}}
              style={{
                flex: 1,
                borderRadius: 10,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;
