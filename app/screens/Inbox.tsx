import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {WIDTH} from '../utils/AppDimension';
import {AppColor} from '../utils/AppColor';
import Notification from '../components/Notification';
import LendenComp from '../components/LendenComp';

const renderScene = SceneMap({
  first: () => <Notification />,
  second: () => <LendenComp />,
});

const Inbox = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'নোটিফিকেশন'},
    {key: 'second', title: 'লেনদেনসমূহ '},
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: AppColor.primary}}
      style={{
        backgroundColor: AppColor.White,
        minHeight: 55,
        justifyContent: 'center',
        elevation: 0,
        borderRadius: 6,
      }}
      labelStyle={{
        color: AppColor.inActiveColor,
      }}
      activeColor={AppColor.primary}
    />
  );
  return (
    <View style={styles.container}>
      {/* header  */}
      <Header text="ইনবক্স" />

      {/* slider */}
      <View
        style={{
          flex: 1,
          width: WIDTH,
          paddingHorizontal: 10,
          marginTop: 15,
        }}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: WIDTH}}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
