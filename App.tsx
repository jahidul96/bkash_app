import React from 'react';
import HomeScreen from './app/screens/HomeScreen';
import {
  GestureHandlerRootView,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Rewards from './app/screens/Rewards';
import BottomNav from './app/screens/navigation/BottomNav';
import PaymentMethodScreen from './app/screens/payScreens/PaymentMethodScreen';
import InputAmountPage from './app/screens/payScreens/InputAmountPage';
import MyQr from './app/screens/MyQr';
import AllOffer from './app/screens/AllOffer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Main"
          component={gestureHandlerRootHOC(BottomNav)}
        />
        <Stack.Screen
          name="Rewards"
          component={gestureHandlerRootHOC(Rewards)}
        />
        <Stack.Screen name="MyQr" component={gestureHandlerRootHOC(MyQr)} />
        <Stack.Screen
          name="PaymentMethodScreen"
          component={gestureHandlerRootHOC(PaymentMethodScreen)}
        />
        <Stack.Screen
          name="InputAmountPage"
          component={gestureHandlerRootHOC(InputAmountPage)}
        />
        <Stack.Screen
          name="AllOffer"
          component={gestureHandlerRootHOC(AllOffer)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
