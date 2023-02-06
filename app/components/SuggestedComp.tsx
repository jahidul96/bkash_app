import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {AppColor} from '../utils/AppColor';
import LinkText from './LinkText';
import {payoption} from '../utils/Interfaces';
import PayOptions from './PayOptions';

interface Props {
  text: string;
  data: Array<payoption>;
}

const SuggestedComp: FC<Props> = ({text, data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.linkTextWrapper}>
        <LinkText text={text} />
      </View>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
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
    backgroundColor: AppColor.White,
    elevation: 1,
    marginBottom: 15,
    borderRadius: 5,
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
    // alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -15,
  },
});
