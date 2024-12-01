import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticatedStack } from './Authenticated';
import { UnauthenticatedStack } from './UnAuthenticated';
import { StyleSheet } from 'react-native';
import { navigationRef } from '@src/utils';
import UseJwtAuth from '@src/features/auth/useJwtAuth';


const MainNavigator = () => {
  const { isAuthenticated } = UseJwtAuth();

  if (isAuthenticated === null) {
    return null; // Loading state
  }
  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <AuthenticatedStack /> : <UnauthenticatedStack />}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default MainNavigator;
