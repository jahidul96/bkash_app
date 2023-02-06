import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {AppColor} from '../utils/AppColor';
import {payoption} from '../utils/Interfaces';
import PayOptions from './PayOptions';

interface Props {
  data: Array<payoption>;
}

const SuggestedComp: FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {data.map(option => (
          <PayOptions key={option.id} payoption={option} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SuggestedComp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  linkTextWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderBottomColor: AppColor.Gray,
    borderBottomWidth: 1,
  },
  scrollContainer: {
    height: 100,
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: -15,
  },
});
