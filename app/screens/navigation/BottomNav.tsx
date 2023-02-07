import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColor} from '../../utils/AppColor';
import HomeScreen from '../HomeScreen';
import Inbox from '../Inbox';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name == 'হোম')
            return (
              <Ionicons
                name="home"
                size={25}
                color={focused ? AppColor.primary : AppColor.Gray}
              />
            );
          if (route.name == 'ইনবক্স')
            return (
              <MaterialCommunityIcons
                name="email"
                size={25}
                color={focused ? AppColor.primary : AppColor.Gray}
              />
            );
        },
        headerShown: false,
        tabBarActiveTintColor: AppColor.primary,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 10,
          marginTop: -10,
        },
      })}>
      <Tab.Screen name="হোম" component={HomeScreen} />

      <Tab.Screen name="ইনবক্স" component={Inbox} />
    </Tab.Navigator>
  );
};

export default BottomNav;
