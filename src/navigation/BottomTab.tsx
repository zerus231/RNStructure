import React from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HOME, HOME_SELECTED, NOTIFICATION, NOTIFICATION_SELECTED, SETTING, SETTING_SELECTED } from '@src/assets/icons/bottom';
import { COLORS } from '@src/theme';
import HomeScreen from '@screens/Home/HomeScreen';

export const KEY_BOTTOM_SCREEN = {
  HOME: 'Trang chủ',
  PROMOTION: 'Khuyến mãi',
  KPI: 'KPI',
  REPORT: 'Báo cáo',
};

const ACTIVE_COLOR = COLORS.primary_A500;
const DEACTIVE_COLOR = COLORS.text_A700;

const BottomTabConstant = {
  [KEY_BOTTOM_SCREEN.HOME]: {
    name: KEY_BOTTOM_SCREEN.HOME,
    component: HomeScreen,
    activeIcon: HOME_SELECTED,
    deactiveIcon: HOME,
    index: 0,
    activeColor: COLORS.primary_A500,
    deactiveColor: DEACTIVE_COLOR,
  },
  [KEY_BOTTOM_SCREEN.PROMOTION]: {
    name: KEY_BOTTOM_SCREEN.PROMOTION,
    component: HomeScreen,
    activeIcon: NOTIFICATION_SELECTED,
    deactiveIcon: NOTIFICATION,
    index: 1,
    activeColor: COLORS.secondary_orange2,
    deactiveColor: DEACTIVE_COLOR,
  },
  [KEY_BOTTOM_SCREEN.KPI]: {
    name: KEY_BOTTOM_SCREEN.KPI,
    component: HomeScreen,
    activeIcon: SETTING_SELECTED,
    deactiveIcon: SETTING,
    index: 2,
    activeColor: COLORS.secondary_green1,
    deactiveColor: DEACTIVE_COLOR,
  },
  [KEY_BOTTOM_SCREEN.REPORT]: {
    name: KEY_BOTTOM_SCREEN.REPORT,
    component: HomeScreen,
    activeIcon: SETTING_SELECTED,
    deactiveIcon: SETTING,
    index: 3,
    activeColor: COLORS.secondary_green1,
    deactiveColor: DEACTIVE_COLOR,
  },
};

const Tab = createBottomTabNavigator();

const renderBottomTab = Object.values(BottomTabConstant)
  .sort((a, b) => a.index - b.index)
  .map(item => (
    <Tab.Screen
      options={{
        headerShown: false,
        // animationEnabled: true,
      }}
      key={item.name}
      name={item.name}
      component={item.component}
    />
  ));

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          borderRadius: 10,
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarLabel: ({ children, color, focused }) => {
          const newColor = focused
            ? BottomTabConstant[route.name].activeColor
            : BottomTabConstant[route.name].deactiveColor;
          return <Text style={{ color: newColor }}>{children}</Text>;
        },
        tabBarIcon: ({ focused, color, size }) => {
          const iconSrc = focused
            ? BottomTabConstant[route.name].activeIcon
            : BottomTabConstant[route.name].deactiveIcon;
          return (
            <Image
              source={iconSrc}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          );
        },
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: DEACTIVE_COLOR,
      })}>
      {renderBottomTab}
    </Tab.Navigator>
  );
};

export default BottomTab;
