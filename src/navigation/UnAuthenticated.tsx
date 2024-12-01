import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@screens/Login/LoginScreen';

const Stack = createStackNavigator();

export const UnauthenticatedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    {/* <Stack.Screen name="Signup" component={Signup} /> */}
  </Stack.Navigator>
);
