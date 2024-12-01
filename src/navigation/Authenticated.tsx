import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import BottomTab from './BottomTab';
import { route } from './route';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <Stack.Screen name="MAIN_SCREEN" component={BottomTab} />
    {route.map(item => (
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

{/* <Stack.Navigator screenOptions={{ headerShown: false }}>
<Stack.Screen name="MAIN_SCREEN" component={BottomTab} />
<Stack.Screen name="Home" component={HomeScreen} />
</Stack.Navigator> */}
