import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import SettingScreen from './screen/SettingScreen';
import React from 'react';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          lazy: true,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          lazy: true,
        }}
        name="Settings"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
