import { NavigationContainer } from '@react-navigation/native';
import UseJwtAuth from '@src/features/auth/useJwtAuth';
import { navigationRef } from '@src/utils';
import React from 'react';
import { AuthenticatedStack } from './Authenticated';
import { UnauthenticatedStack } from './UnAuthenticated';


const MainNavigator = () => {
  const { isAuthenticated } = UseJwtAuth();

  if (isAuthenticated === null) {
    return null;
  }
  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <AuthenticatedStack /> : <UnauthenticatedStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
