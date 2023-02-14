import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailScreen from '../screen/DetailScreen';
import ListScreen from '../screen/ListScreen';

const ListNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default ListNavigator;
