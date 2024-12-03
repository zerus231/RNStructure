import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from '@src/constants/screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTab from './BottomTab';
import { routeAuthenticated } from './routeAuthenticated';

const Stack = createStackNavigator();
const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <Stack.Screen name={SCREENS.MAIN} component={BottomTab} />
    {routeAuthenticated.map(item => (
      <Stack.Screen
        key={item.name}
        name={item.name}
        component={item.component}
      />
    ))}
  </Stack.Navigator>
);
export const AuthenticatedStack = () => (
  <SafeAreaProvider>
    <MainStack />
  </SafeAreaProvider>
);