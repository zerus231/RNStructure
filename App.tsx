import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import MainNavigator from './src/navigation/MainNavigator';
import store from './src/store/store';
import JwtAuthProvider from '@src/features/auth/JwtAuthProvider';

const App = () => {
  return (
    <JwtAuthProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />
          <MainNavigator />
        </SafeAreaProvider>
      </Provider>
    </JwtAuthProvider>
  );
};

export default App;
