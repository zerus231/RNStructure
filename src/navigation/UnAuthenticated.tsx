import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@screens/Login/LoginScreen';
import SCREENS from '@src/constants/screen';
const Stack = createStackNavigator();

export const UnauthenticatedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
    {/* <Stack.Screen name="Signup" component={Signup} /> */}
  </Stack.Navigator>
);
