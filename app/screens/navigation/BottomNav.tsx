import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColor} from '../../utils/AppColor';
import HomeScreen from '../HomeScreen';
import Inbox from '../Inbox';
import ScanQr from '../ScanQr';
import {
  Alert,
  Animated,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {qrcode} from '../../utils/fileExport';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const navigation = useNavigation<any>();
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

          if (route.name == 'Qr স্ক্যান') {
            return (
              <Animated.View style={styles.btnCircle}>
                <TouchableNativeFeedback
                  style={styles.qrWrapper}
                  onPress={() => navigation.navigate('Qr স্ক্যান')}>
                  <Image source={qrcode} style={styles.qrIconStyle} />
                </TouchableNativeFeedback>
              </Animated.View>
            );
          }
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
          marginTop: -6,
        },
      })}>
      <Tab.Screen name="হোম" component={HomeScreen} />
      <Tab.Screen name="Qr স্ক্যান" component={ScanQr} />
      <Tab.Screen name="ইনবক্স" component={Inbox} />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
    bottom: 25,
  },
  qrWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  qrIconStyle: {
    width: 30,
    height: 30,
    tintColor: AppColor.primary,
  },
});
