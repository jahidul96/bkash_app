import React from 'react';
import HomeScreen from './app/screens/HomeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <HomeScreen />
    </GestureHandlerRootView>
  );
};

export default App;
