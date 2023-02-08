import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {WIDTH} from '../../utils/AppDimension';
import Header from '../../components/Header';
import {AppColor} from '../../utils/AppColor';
import AgentComp from '../../components/paymentComp/AgentComp';
import AtmComp from '../../components/paymentComp/AtmComp';

const renderScene = SceneMap({
  first: () => <AgentComp />,
  second: () => <AtmComp />,
});

const PaymentMethodScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'এজেন্ট'},
    {key: 'second', title: 'এটিএম '},
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
      <Header text="ক্যাশ আউট" back />

      {/* slider */}
      <View
        style={{
          flex: 1,
          width: WIDTH,
          paddingHorizontal: 15,
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

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
