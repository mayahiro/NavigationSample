import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import ListNavigator from './ListNavigator';
import SettingNavigator from './SettingNavigator';

const TopNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="ListNavigator"
        component={ListNavigator}
        options={{headerShown: false, title: 'List'}}
      />
      <Tab.Screen
        name="SettingNavigator"
        component={SettingNavigator}
        options={{headerShown: false, title: 'Setting'}}
      />
    </Tab.Navigator>
  );
};

export default TopNavigator;
