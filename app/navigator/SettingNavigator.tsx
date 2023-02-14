import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Setting1Screen from '../screen/Setting1Screen';
import Setting2Screen from '../screen/Setting2Screen';
import Setting3Screen from '../screen/Setting3Screen';
import SettingScreen from '../screen/SettingScreen';

const SettingNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Setting1" component={Setting1Screen} />
      <Stack.Screen name="Setting2" component={Setting2Screen} />
      <Stack.Screen name="Setting3" component={Setting3Screen} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
