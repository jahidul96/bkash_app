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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
